import { NextResponse } from "next/server";

export async function GET() {
    try {
        const IG_USER_ID = process.env.IG_USER_ID;
        const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

        if (!IG_USER_ID || !ACCESS_TOKEN) {
            return NextResponse.json(
                { error: "Missing ENV values" },
                { status: 500 }
            );
        }

        const response = await fetch(
            `https://graph.facebook.com/v18.0/${IG_USER_ID}/media?fields=id,caption,media_url,media_type,permalink,timestamp,thumbnail_url&access_token=${ACCESS_TOKEN}`
        );

        const data = await response.json();

        return NextResponse.json(data.data);
    } catch (error: any) {
        console.error("Instagram fetch error:", error);
        return NextResponse.json(
            {
                message: "Error fetching Instagram posts",
                error: error.message,
            },
            { status: 500 }
        );
    }
}