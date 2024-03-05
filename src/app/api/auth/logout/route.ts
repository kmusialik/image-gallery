import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    // create the response
    const response = NextResponse.json({
      message: 'logout successfully',
      success: true,
    });

    //set the cookie on the response
    response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) });
    // return the response
    return response;
    
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500, statusText: 'internal server Error' }
    );
  }
};
