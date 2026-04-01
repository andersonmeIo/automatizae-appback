import dotenv from "dotenv";
dotenv.config();

export class AuthServices {
    async getInstances() {
        try {
            const res = await fetch(`${process.env.API_URL}/instance/fetchInstances`, {
                method: 'GET',
                headers: {
                    apiKey: `${process.env.API_KEY}`
                }
            });

            const data = await res.json();
            
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}