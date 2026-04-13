import { tokenAuth } from "./tokens";

// Hardcoded credentials for frontend-only auth
const HARDCODED_EMAIL = "Rebeccatheresa104@gmail.com";
const HARDCODED_PASSWORD = "Rebeccatheresa104";
const HARDCODED_UID = "user-rebecca-001";

// Hardcoded user profile
const HARDCODED_PROFILE = {
  uid: HARDCODED_UID,
  email: HARDCODED_EMAIL,
  firstName: "Rebecca",
  lastName: "Theresa",
  displayName: "Rebecca Theresa",
  username: "rebeccatheresa104",
  studentNumber: "STU-2024-001",
  preferredName: "Rebecca",
  photoURL: null,
  faculty: "Business",
  program: "Business Administration and Tourism",
  yearOfStudy: 3,
  totalYears: 4,
  academicStanding: "Good",
  department: "Business Administration and Tourism",
  gpa: 3.8,
  creditsCompleted: 90,
  enrolledCourses: [
    {
      code: "CS301",
      name: "Advanced Algorithms",
      credits: 4,
      status: "In Progress",
      currentMark: 87,
      progress: 75,
    },
    {
      code: "CS302",
      name: "Database Systems",
      credits: 3,
      status: "In Progress",
      currentMark: 92,
      progress: 80,
    },
    {
      code: "CS303",
      name: "Web Development",
      credits: 3,
      status: "In Progress",
      currentMark: 95,
      progress: 90,
    },
    {
      code: "CS304",
      name: "Machine Learning",
      credits: 4,
      status: "In Progress",
      currentMark: 85,
      progress: 70,
    },
  ],
  residence: {
    name: "Tugela Hall",
    room: "B-204",
    mealPlan: "Full Board",
    feeStatus: "Unpaid",
    houseCommitteeRole: "Vice President",
  },
  lastLogin: new Date().toISOString(),
  createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
  updatedAt: new Date().toISOString(),
  dateOfBirth: '1995-09-15',
  homeLanguage: 'Spanish/English',
  cellNumber: '+1 626 8247898',
};

async function getCurrentUser(): Promise<string | null> {
  const token = localStorage.getItem("auth_token");
  if (!token) return null;
  const payload = tokenAuth.verifyToken(token);
  return payload ? payload.uid : null;
}

export const api = {
  async register(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    username: string;
  }) {
    // Registration disabled in frontend-only mode
    throw new Error("Registration is not available in this version");
  },

  async login(email: string, password: string) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check hardcoded credentials
    if (
      email.toLowerCase() === HARDCODED_EMAIL.toLowerCase() &&
      password === HARDCODED_PASSWORD
    ) {
      const token = tokenAuth.generateToken(HARDCODED_UID, HARDCODED_EMAIL);
      localStorage.setItem("auth_token", token);
      return {
        uid: HARDCODED_UID,
        token,
      };
    }

    throw new Error("Invalid email or password");
  },

  async logout() {
    localStorage.removeItem("auth_token");
  },

  async getCurrentUser() {
    const uid = await getCurrentUser();
    if (!uid || uid !== HARDCODED_UID) return null;
    return HARDCODED_PROFILE;
  },

  async updateUser(updates: any) {
    const uid = await getCurrentUser();
    if (!uid || uid !== HARDCODED_UID) throw new Error("Not authenticated");
    // In frontend-only mode, updates are not persisted
    return { ...HARDCODED_PROFILE, ...updates };
  },

  async getAllUsers() {
    // Not available in frontend-only mode
    return [];
  },

  async getFinances() {
    return {
      fees: [
        { type: "Tuition", amount: 50000, status: "❌ Unpaid", dueDate: "2026-04-15" },
        { type: "Residence", amount: 15000, status: "❌ Unpaid", dueDate: "2026-04-15" },
        { type: "Student Activities", amount: 2000, status: "✅ Paid", dueDate: null },
      ],
      totalDue: 67000,
      paidToDate: 2000,
      outstanding: 65000,
      paymentPlan: null,
    };
  },

  async getNotifications() {
    return {
      notifications: [
        {
          id: "1",
          type: "info",
          message: "Welcome back to UCT!",
          dueDate: null,
          urgent: false,
          read: false,
        },
        {
          id: "2",
          type: "warning",
          message: "Course registration closes on 31st March",
          dueDate: "2026-03-31",
          urgent: true,
          read: false,
        },
        {
          id: "3",
          type: "success",
          message: "Your exam schedule has been published",
          dueDate: null,
          urgent: false,
          read: true,
        },
      ],
    };
  },

  async getTimetable() {
    return {
      entries: [
        {
          day: "Monday",
          time: "09:00",
          courseCode: "CS301",
          type: "Lecture",
        },
        {
          day: "Monday",
          time: "11:00",
          courseCode: "CS302",
          type: "Tutorial",
        },
        {
          day: "Tuesday",
          time: "10:00",
          courseCode: "CS303",
          type: "Lecture",
        },
        {
          day: "Wednesday",
          time: "14:00",
          courseCode: "CS304",
          type: "Lab",
        },
        {
          day: "Thursday",
          time: "09:00",
          courseCode: "CS301",
          type: "Tutorial",
        },
        {
          day: "Friday",
          time: "10:00",
          courseCode: "CS302",
          type: "Lecture",
        },
      ],
    };
  },
};
