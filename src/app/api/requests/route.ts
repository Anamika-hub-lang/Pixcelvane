import { NextRequest, NextResponse } from 'next/server';
import { dataStore, DesignRequest } from '@/lib/store';
import { getUserFromRequest } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const user = getUserFromRequest(request.headers);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    let requests: DesignRequest[];

    if (user.role === 'admin') {
      requests = dataStore.getAllRequests();
    } else {
      requests = dataStore.getRequestsByUserId(user.id);
    }

    return NextResponse.json({ requests });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = getUserFromRequest(request.headers);
    
    if (!user || user.role !== 'client') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { title, description, serviceType, files } = await request.json();

    if (!title || !description || !serviceType) {
      return NextResponse.json(
        { error: 'Title, description, and service type are required' },
        { status: 400 }
      );
    }

    const newRequest = dataStore.createRequest(
      user.id,
      title,
      description,
      serviceType,
      files || []
    );

    return NextResponse.json({ request: newRequest }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
