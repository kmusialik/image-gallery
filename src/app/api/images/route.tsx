// pages/api/images.js
import fs from 'fs';
import path from 'path';

import { NextResponse } from 'next/server';
import data from './imageData.json';

//  http://localhost:3005/api/cars
export async function GET() {
  try {
    const a = data
    //const a = JSON.parse(a);
    //console.log(a);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'server error', success: false },
      { status: 500, statusText: 'internal server error' }
    );
  }
}