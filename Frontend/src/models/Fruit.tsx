export default interface Fruit {
    fruit_id: number;
    fruit_name: string;
    fruit_image: string;
    fruit_history: string;
    fruit_benefit: {
        one: string;
        two: string;
        three: string;
        four: string;
        five: string;
    };
    fruit_nutritions: {
        calories: number;
        total_fat: number;
        saturated_fat: number;
        cholesterol: number;
        sodium: number;
        potassium: number;
        carbohydrates: number;
        dietary_fiber: number;
        sugar: number;
        protein: number;
        vitamins: {
            vitamin_C: number;
            calcium: number;
            iron: number;
            vitamin_D: number;
            vitamin_B6: number;
            vitamin_B12: number;
            magnesium: number;
        };
    };
}
