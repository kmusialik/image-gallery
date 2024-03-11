// pages/api/images/[carId].ts
import { NextRequest, NextResponse } from 'next/server';
import data from './imageData.json';

type Params = {
  params: { carId: string };
};

export const GET = async (req: NextRequest, { params }: Params) => {
  try {
    const { carId } = params;
    const image = data.find((item) => String(item.id) === carId);
    
    if (!image) {
      return NextResponse.json(
        { message: 'Image not found', success: false },
        { status: 404, statusText: 'Not Found' }
      );
    }

    return NextResponse.json(image);
  } catch (error) {
    return NextResponse.json(
      { message: 'Server error', success: false },
      { status: 500, statusText: 'Internal Server Error' }
    );
  }
};


