import axios from "axios";
import { Job } from "../../src/entity/Job";

import 'dotenv/config';

export async function fetchApi(role: string): Promise<Job[]> {
    const apiKey = process.env.GOOGLE_KEY;
    const customSearchEngineId = process.env.GOOGLE_CX;
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${customSearchEngineId}&q=${role}`;
    
    const response = await axios.get(url);
    const fetchData = response.data;

    if(fetchData.items && fetchData.items.length > 0) {
        const results = fetchData.items.map((item: any) => ({
            title: item.title,
            link: item.link
        }))

        return results;
    } else {
        return [];
    }
}