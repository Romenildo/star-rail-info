import { NextResponse } from "next/server";
import axios from "axios"

export async function POST(request: Request) {

    const body = await request.json();
    const {id} = body

    const baseUrl = "https://api.mihomo.me/sr_info_parsed";
    const url = `${baseUrl}/${id}?lang=pt`;
    console.log(id)
    console.log(url)

    let data;
  await axios.get(url).then(res=>{
    data = res.data
  })

  return NextResponse.json(data);
}