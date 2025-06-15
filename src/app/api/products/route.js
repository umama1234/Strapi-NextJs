// filepath: c:\Users\Sultan\Desktop\my-strapi-project\frontend\src\app\api\products\route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[IsFeatured][$eq]=false`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const products = await response.json();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}