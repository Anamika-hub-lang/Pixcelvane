import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/store';
import { getUserFromRequest } from '@/lib/auth';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = getUserFromRequest(req.headers);
    const { id } = await params;
    
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const requests = user.role === 'admin' 
      ? dataStore.getAllRequests() 
      : dataStore.getRequestsByUserId(user.id);
    
    const request = requests.find(r => r.id === id);

    if (!request) {
      return NextResponse.json(
        { error: 'Request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ request });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = getUserFromRequest(req.headers);
    const { id } = await params;
    
    if (!user || user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { status, deliverableFiles } = body;

    let updatedRequest = null;

    if (status) {
      updatedRequest = dataStore.updateRequestStatus(id, status);
    }

    if (deliverableFiles && deliverableFiles.length > 0) {
      updatedRequest = dataStore.addDeliverableFiles(id, deliverableFiles);
    }

    if (!updatedRequest) {
      return NextResponse.json(
        { error: 'Request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ request: updatedRequest });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
