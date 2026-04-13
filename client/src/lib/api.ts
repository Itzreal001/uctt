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
  faculty: "Business Administration & Tourism",
  program: "Business Administration and Tourism",
  yearOfStudy: 4,
  totalYears: 4,
  academicStanding: "Professional Level",
  department: "Business Administration and Tourism",
  gpa: 3.8,
  creditsCompleted: 120,
  enrolledCourses: [
    {
      code: "BA401",
      name: "Principles of Management",
      credits: 4,
      status: "In Progress",
      currentMark: 88,
      progress: 80,
    },
    {
      code: "BA402",
      name: "Introduction to Tourism & Hospitality",
      credits: 4,
      status: "In Progress",
      currentMark: 91,
      progress: 78,
    },
    {
      code: "BA403",
      name: "Business Communication",
      credits: 3,
      status: "In Progress",
      currentMark: 85,
      progress: 74,
    },
    {
      code: "BA404",
      name: "Financial Accounting",
      credits: 4,
      status: "In Progress",
      currentMark: 90,
      progress: 82,
    },
    {
      code: "BA405",
      name: "Marketing Principles",
      credits: 3,
      status: "In Progress",
      currentMark: 87,
      progress: 76,
    },
  ],
  residence: {
    name: "Tugela Hall",
    room: "B-204",
    mealPlan: "Full Board",
    feeStatus: "Partially Paid",
    houseCommitteeRole: "Vice President",
  },
  lastLogin: new Date().toISOString(),
  createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
  updatedAt: new Date().toISOString(),
  dateOfBirth: '1995-09-15',
  homeLanguage: 'Spanish/English',
  cellNumber: '+1 626 8247898',
  nationality: 'Dominican',
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
        { type: "Tuition", amount: 50000, status: "⚠️ Partially Paid", dueDate: "2026-04-15" },
        { type: "Residence", amount: 15000, status: "⚠️ Partially Paid", dueDate: "2026-04-15" },
        { type: "Student Activities", amount: 2000, status: "✅ Paid", dueDate: null },
      ],
      totalDue: 67000,
      paidToDate: 33500,
      outstanding: 33500,
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
        { day: "Monday", time: "08:00 – 10:00", subject: "Principles of Management", type: "Lecture" },
        { day: "Monday", time: "10:00 – 11:00", subject: "Break", type: "Break" },
        { day: "Monday", time: "11:00 – 13:00", subject: "Introduction to Tourism & Hospitality", type: "Lecture" },
        { day: "Monday", time: "13:00 – 14:00", subject: "Lunch", type: "Break" },
        { day: "Monday", time: "14:00 – 16:00", subject: "Business Communication", type: "Lecture" },
        { day: "Monday", time: "16:00 – 18:00", subject: "Personal Study / Assignments", type: "Study" },

        { day: "Tuesday", time: "08:00 – 10:00", subject: "Financial Accounting", type: "Lecture" },
        { day: "Tuesday", time: "10:00 – 11:00", subject: "Break", type: "Break" },
        { day: "Tuesday", time: "11:00 – 13:00", subject: "Tourism Geography", type: "Lecture" },
        { day: "Tuesday", time: "13:00 – 14:00", subject: "Lunch", type: "Break" },
        { day: "Tuesday", time: "14:00 – 16:00", subject: "Marketing Principles", type: "Lecture" },
        { day: "Tuesday", time: "16:00 – 17:30", subject: "Group Discussion / Case Study", type: "Workshop" },

        { day: "Wednesday", time: "08:00 – 10:00", subject: "Business Law", type: "Lecture" },
        { day: "Wednesday", time: "10:00 – 11:00", subject: "Break", type: "Break" },
        { day: "Wednesday", time: "11:00 – 13:00", subject: "Travel & Tour Operations", type: "Lecture" },
        { day: "Wednesday", time: "13:00 – 14:00", subject: "Lunch", type: "Break" },
        { day: "Wednesday", time: "14:00 – 16:00", subject: "Entrepreneurship Development", type: "Lecture" },
        { day: "Wednesday", time: "16:00 – 18:00", subject: "Free / Rest", type: "Free" },

        { day: "Thursday", time: "08:00 – 10:00", subject: "Human Resource Management", type: "Lecture" },
        { day: "Thursday", time: "10:00 – 11:00", subject: "Break", type: "Break" },
        { day: "Thursday", time: "11:00 – 13:00", subject: "Event Management (Tourism Focus)", type: "Lecture" },
        { day: "Thursday", time: "13:00 – 14:00", subject: "Lunch", type: "Break" },
        { day: "Thursday", time: "14:00 – 16:00", subject: "Research Methods", type: "Lecture" },
        { day: "Thursday", time: "16:00 – 18:00", subject: "Library / Study Time", type: "Study" },

        { day: "Friday", time: "08:00 – 10:00", subject: "Economics (Micro/Macro)", type: "Lecture" },
        { day: "Friday", time: "10:00 – 11:00", subject: "Break", type: "Break" },
        { day: "Friday", time: "11:00 – 13:00", subject: "Sustainable Tourism Development", type: "Lecture" },
        { day: "Friday", time: "13:00 – 14:00", subject: "Lunch", type: "Break" },
        { day: "Friday", time: "14:00 – 15:30", subject: "ICT for Business", type: "Lecture" },
        { day: "Friday", time: "15:30 – 17:00", subject: "Tutorial / Revision", type: "Tutorial" },

        { day: "Saturday", time: "09:00 – 12:00", subject: "Internship / Field Work (Hotel, Travel Agency, Event Planning)", type: "Optional" },
        { day: "Saturday", time: "13:00 – 16:00", subject: "Group Projects", type: "Optional" },
        { day: "Saturday", time: "16:00 – 18:00", subject: "Extra Study", type: "Optional" },
      ],
    };
  },
};
