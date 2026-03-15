import { v4 as uuidv4 } from 'uuid';
import { hashPassword, comparePassword } from './auth';

export interface DesignRequest {
  id: string;
  userId: string;
  title: string;
  description: string;
  serviceType: string;
  status: 'pending' | 'in_progress' | 'review' | 'completed' | 'delivered';
  files: string[];
  deliverableFiles: string[];
  createdAt: string;
  updatedAt: string;
}

export interface UserData {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'client' | 'admin';
  plan?: string;
  createdAt: string;
}

class DataStore {
  private users: UserData[] = [];
  private requests: DesignRequest[] = [];

  constructor() {
    this.seedData();
  }

  private seedData() {
    const adminPassword = hashPassword('admin123');
    this.users.push({
      id: 'admin-1',
      email: 'admin@pixcelvane.com',
      password: adminPassword,
      name: 'Admin User',
      role: 'admin',
      createdAt: new Date().toISOString(),
    });

    const clientPassword = hashPassword('client123');
    this.users.push({
      id: 'client-1',
      email: 'client@example.com',
      password: clientPassword,
      name: 'John Doe',
      role: 'client',
      plan: 'growth',
      createdAt: new Date().toISOString(),
    });

    this.requests.push({
      id: 'req-1',
      userId: 'client-1',
      title: 'Website Redesign',
      description: 'Need a complete redesign of our landing page with modern aesthetics',
      serviceType: 'website',
      status: 'in_progress',
      files: [],
      deliverableFiles: ['/uploads/design-v1.pdf'],
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    });

    this.requests.push({
      id: 'req-2',
      userId: 'client-1',
      title: 'Social Media Campaign',
      description: 'Create engaging social media posts for our product launch',
      serviceType: 'social',
      status: 'completed',
      files: [],
      deliverableFiles: ['/uploads/social-pack.zip'],
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }

  findUserByEmail(email: string): UserData | undefined {
    return this.users.find(u => u.email === email);
  }

  findUserById(id: string): UserData | undefined {
    return this.users.find(u => u.id === id);
  }

  createUser(email: string, password: string, name: string, role: 'client' | 'admin' = 'client', plan?: string): UserData {
    const user: UserData = {
      id: uuidv4(),
      email,
      password: hashPassword(password),
      name,
      role,
      plan,
      createdAt: new Date().toISOString(),
    };
    this.users.push(user);
    return user;
  }

  validateUser(email: string, password: string): UserData | null {
    const user = this.findUserByEmail(email);
    if (!user || !comparePassword(password, user.password)) return null;
    return user;
  }

  getAllUsers(): Omit<UserData, 'password'>[] {
    return this.users.map(({ password, ...user }) => user);
  }

  getAllRequests(): DesignRequest[] {
    return this.requests;
  }

  getRequestsByUserId(userId: string): DesignRequest[] {
    return this.requests.filter(r => r.userId === userId);
  }

  createRequest(userId: string, title: string, description: string, serviceType: string, files: string[] = []): DesignRequest {
    const request: DesignRequest = {
      id: uuidv4(),
      userId,
      title,
      description,
      serviceType,
      status: 'pending',
      files,
      deliverableFiles: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.requests.push(request);
    return request;
  }

  updateRequestStatus(id: string, status: DesignRequest['status']): DesignRequest | null {
    const request = this.requests.find(r => r.id === id);
    if (!request) return null;
    request.status = status;
    request.updatedAt = new Date().toISOString();
    return request;
  }

  addDeliverableFiles(id: string, files: string[]): DesignRequest | null {
    const request = this.requests.find(r => r.id === id);
    if (!request) return null;
    request.deliverableFiles.push(...files);
    request.updatedAt = new Date().toISOString();
    return request;
  }
}

export const dataStore = new DataStore();
