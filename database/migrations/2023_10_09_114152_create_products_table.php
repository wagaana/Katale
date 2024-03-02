<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('brand_id')->nullable();
            $table->bigInteger('category_id')->nullable();
            $table->bigInteger('user_id')->nullable()->comment('if none or 1 then own else sellers');
            $table->bigInteger('created_by');
            $table->string('slug');

            $table->string('lang')->nullable()->default('en');
            $table->string('name')->nullable();
            $table->text('short_description');
            $table->longText('description');

            $table->string('tags')->nullable();
            $table->string('unit')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description');
            $table->string('meta_keywords')->nullable();

            $table->double('price')->nullable();
            $table->double('special_discount')->nullable();
            $table->string('special_discount_type')->nullable();
            $table->timestamp('special_discount_start')->nullable();
            $table->timestamp('special_discount_end')->nullable();
            $table->double('purchase_cost')->nullable();
            $table->string('barcode')->nullable();
            $table->string('video_provider')->nullable();
            $table->string('video_url')->nullable();
            $table->text('attribute_sets')->nullable();
            $table->string('packaging_config')->comment('This is used to determine the package weight and delivery fees')->default('{\"length\":0,\"width\":0,\"height\":0,\"weight\":0}');
            $table->tinyInteger('has_variant')->default(0);
            $table->mediumText('selected_variants')->nullable();
            $table->mediumText('selected_variants_ids')->nullable();
            $table->text('thumbnail');
            $table->text('images');
            $table->string('thumbnail_id')->nullable();
            $table->integer('current_stock');
            $table->integer('minimum_order_quantity')->default(1);
            $table->tinyInteger('stock_notification')->default(0);
            $table->integer('low_stock_to_notify')->nullable();
            $table->enum('stock_visibility', [
                'hide_stock',
                'visible_with_quantity',
                'visible_with_text'
            ])->default('hide_stock');
            $table->bigInteger('total_sale')->default(0);
            $table->enum('status', ['unpublished', 'published', 'trash'])->default('unpublished');
            $table->tinyInteger('is_approved')->default(0)->comment('use for seller product approval purpose');
            $table->tinyInteger('is_catalog')->default(0)->comment('if 1 cant added to cart only view');
            $table->string('external_link')->nullable();
            $table->tinyInteger('is_featured')->default(0);
            $table->tinyInteger('is_featured_on_seller')->default(0);
            $table->tinyInteger('is_classified')->default(0);
            $table->tinyInteger('is_wholesale')->default(0);
            $table->tinyInteger('is_digital')->default(0);
            $table->tinyInteger('is_refundable')->default(0);
            $table->tinyInteger('todays_deal')->default(0);
            $table->double('rating', 8, 2)->default(0.00);
            $table->bigInteger('viewed')->default(0)->comment('total views of the product');
            $table->text('meta_image')->nullable();
            $table->text('product_file')->nullable();
            $table->bigInteger('product_file_id')->nullable();
            $table->string('meta_image_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
