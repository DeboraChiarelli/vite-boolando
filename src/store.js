import { reactive } from 'vue'
import productsJson from '../db.json';
export const store = reactive({
    cards: productsJson.products
});