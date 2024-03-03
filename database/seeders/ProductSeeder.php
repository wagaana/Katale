<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::truncate();

        $product = new Product;
        $product->brand_id = 1;
        $product->category_id = 1;
        $product->current_stock = 0;
        $product->user_id = 0;
        $product->created_by = 0;
        $product->slug = ".";
        $product->name = ".";
        $product->short_description = ".";
        $product->description = ".";

        $product->price = 0;
        $product->special_discount = 0;
        $product->special_discount_type  = 'flat';
        $product->special_discount_start = ".";
        $product->special_discount_end  = ".";
        $product->purchase_cost = ".";

        $product->minimum_order_quantity = 1;
        $product->low_stock_to_notify = 0;

        $product->thumbnail = ".";
        $product->thumbnail_id = 0;

        $product->is_featured = 0;
        $product->attribute_sets =  '[]';

        $product->meta_description = ".";
        $product->selected_variants = '[]';
        $product->selected_variants_ids = '[]';
        $product->images = [];
        $product->description_images = '[]';
        $product->status = "unpublished";

        $product->save();
    }
}
