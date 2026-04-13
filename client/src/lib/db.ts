import { randomUUID } from "crypto";

export interface UserProfile {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  username: string;
  studentNumber: string | null;
  preferredName: string | null;
  photoURL: string | null;
  faculty: string | null;
  program: string | null;
  yearOfStudy: number | null;
  totalYears: number | null;
  academicStanding: string | null;
  department: string | null;
  gpa: number | null;
  creditsCompleted: number;
  enrolledCourses: Course[];
  residence: ResidenceInfo | null;
  lastLogin: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  code: string;
  name: string;
  credits: number;
  status: string;
  currentMark: number | null;
  progress: number;
}

export interface ResidenceInfo {
  name: string;
  room: string;
  mealPlan: string;
  feeStatus: string;
  houseCommitteeRole: string | null;
}

interface StoredUser extends UserProfile {
  passwordHash: string; // Simple hash for demo (not cryptographically secure)
}

const USERS_KEY = "uct_users";
const USERNAMES_KEY = "uct_usernames";

// Load initial data from JSON if not in localStorage
async function loadInitialData() {
  if (!localStorage.getItem(USERS_KEY)) {
    try {
      const response = await fetch('/data/users.json');
      const users = await response.json();
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Failed to load users data', e);
    }
  }
  if (!localStorage.getItem(USERNAMES_KEY)) {
    try {
      const response = await fetch('/data/usernames.json');
      const usernames = await response.json();
      localStorage.setItem(USERNAMES_KEY, JSON.stringify(usernames));
    } catch (e) {
      console.error('Failed to load usernames data', e);
    }
  }
}

loadInitialData();

function readUsers(): Record<string, StoredUser> {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : {};
}

function writeUsers(users: Record<string, StoredUser>): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users, null, 2));
}

function readUsernames(): Record<string, string> {
  const data = localStorage.getItem(USERNAMES_KEY);
  return data ? JSON.parse(data) : {};
}

function writeUsernames(usernames: Record<string, string>): void {
  localStorage.setItem(USERNAMES_KEY, JSON.stringify(usernames, null, 2));
}

// Simple hash function (for demo - not production-grade)
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

export const db = {
  async checkUsernameAvailable(username: string): Promise<boolean> {
    const usernames = readUsernames();
    return !usernames[username.toLowerCase()];
  },

  async createUser(userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    username: string;
  }): Promise<string> {
    const users = readUsers();
    const usernames = readUsernames();

    const emailLower = userData.email.toLowerCase();
    const usernameLower = userData.username.toLowerCase();

    // Check if email exists
    for (const user of Object.values(users)) {
      if (user.email.toLowerCase() === emailLower) {
        throw new Error("Email already exists");
      }
    }

    if (usernames[usernameLower]) {
      throw new Error("Username already taken");
    }

    const uid = randomUUID();
    const now = new Date().toISOString();

    const newUser: StoredUser = {
      uid,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      displayName: `${userData.firstName} ${userData.lastName}`,
      username: userData.username,
      studentNumber: null,
      preferredName: null,
      photoURL: null,
      faculty: null,
      program: null,
      yearOfStudy: null,
      totalYears: null,
      academicStanding: null,
      department: null,
      gpa: null,
      creditsCompleted: 0,
      enrolledCourses: [],
      residence: null,
      lastLogin: null,
      createdAt: now,
      updatedAt: now,
      passwordHash: simpleHash(userData.password),
    };

    users[uid] = newUser;
    usernames[usernameLower] = uid;

    writeUsers(users);
    writeUsernames(usernames);

    return uid;
  },

  async authenticateUser(email: string, password: string): Promise<string | null> {
    const users = readUsers();
    const passwordHash = simpleHash(password);

    for (const user of Object.values(users)) {
      if (user.email.toLowerCase() === email.toLowerCase() && user.passwordHash === passwordHash) {
        // Update last login
        user.lastLogin = new Date().toISOString();
        user.updatedAt = new Date().toISOString();
        writeUsers(users);
        return user.uid;
      }
    }
    return null;
  },

  async getUserById(uid: string): Promise<UserProfile | null> {
    const users = readUsers();
    const user = users[uid];
    if (!user) return null;

    // Return without passwordHash
    const { passwordHash, ...profile } = user;
    return profile;
  },

  async updateUser(uid: string, updates: Partial<UserProfile>): Promise<void> {
    const users = readUsers();
    if (!users[uid]) throw new Error("User not found");

    users[uid] = { ...users[uid], ...updates, updatedAt: new Date().toISOString() };
    writeUsers(users);
  },

  async getAllUsers(): Promise<UserProfile[]> {
    const users = readUsers();
    return Object.values(users).map(({ passwordHash, ...user }) => user);
  },
};