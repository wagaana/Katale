<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Address;
use App\Models\AttributeSet;
use App\Models\Brand;
use App\Models\Cart;
use App\Models\Category;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\ProductAttribute;
use App\Models\ProductSpecification;
use App\Models\ProductView;
use App\Models\Seller;
use App\Models\Specification;
use App\Models\Wishlist;
use App\Models\ProductDiscussion;

use App\Models\ShoppingCollectionPoint;
use App\Models\ShoppingCollectionPointGallery;
use App\Models\ShoppingCollectionPointAdmin;
use App\Models\SliderImage;
use App\Models\CamaignsBanner;
use App\Models\State;
use App\Models\City;
use App\Models\File;
use App\Models\PackageType;
use App\Models\DeliveryCompany;
use App\Models\CompanyDeliveryPoint;
use App\Models\CompanyDeliveryRoute;
use App\Models\Currency;
use App\Models\Voucher;
use App\Models\Advert;
use App\Models\Transaction;
use App\Models\DeliveryRequest;
use App\Models\DeliveryRequestPackage;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class MarketplceController extends Controller
{
    public function submitShopingCategory(Request $request)
    {
        $slug = lcfirst(preg_replace('/[.,\s]/', '', $request->input('title')));
        $i = 0;
        while (Category::where('slug', $slug)->exists()) {
            $i++;
            $slug = $slug . $i;
        }

        $image = json_decode($request->input('image'), true);


        $shopingCategories = new Category;
        $shopingCategories->slug = $slug;
        try {
            $shopingCategories->parent = $request->input('parent_id') != null ? Category::where('id', $request->input('parent_id'))->first()->title : NULL;
            $shopingCategories->parent_id = $request->input('parent_id');
        } catch (\Exception $ex) {
        }
        $shopingCategories->title = $request->input('title');
        $shopingCategories->description = $request->input('description');
        $shopingCategories->logo_id = $request->input('logo_id');
        $shopingCategories->logo = getFileLink($image);
        $shopingCategories->save();

        return response()->json(array(
            'data' => $shopingCategories,
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function loadShopingCategories()
    {
        $data = Category::orderBy('id', 'desc')->get();

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function loadShopingMainCategories()
    {
        $data = Category::where('parent_id', NULL)->orderBy('id', 'desc')->get();

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function loadShopingFeaturedCategories()
    {
        $data = Category::where('is_featured', 1)->orderBy('id', 'desc')->get();

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function deleteShopingCategory($categoryId)
    {

        $data = Category::where('id', $categoryId)->delete();

        if ($data) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function submitShopingBrand(Request $request)
    {
        $slug = lcfirst(preg_replace('/[.,\s]/', '', $request->input('title')));
        $i = 0;
        while (Brand::where('slug', $slug)->exists()) {
            $i++;
            $slug = $slug . $i;
        }

        $image = json_decode($request->input('image'), true);

        $shopingCategories = new Brand;
        $shopingCategories->slug = $slug;
        $shopingCategories->title = $request->input('title');
        $shopingCategories->logo_id = $request->input('logo_id');
        $shopingCategories->logo = getFileLink($image);
        $shopingCategories->save();

        return response()->json(array(
            'data' => $shopingCategories,
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function loadShopingBrands()
    {
        $data = Brand::orderBy('id', 'desc')->get();

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function deleteShopingBrand($brandId)
    {

        $data = Brand::where('id', $brandId)->delete();

        if ($data) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function submitShopingAttributeSet(Request $request)
    {
        $attributeSet = new AttributeSet;
        $attributeSet->title = $request->input('title');
        $attributeSet->save();

        return response()->json(array(
            'data' => $attributeSet,
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function loadShopingAttributeSets()
    {
        $data = AttributeSet::orderBy('id', 'desc')->get();

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function deleteShopingAttributeSet($attributeId)
    {

        $data = AttributeSet::where('id', $attributeId)->delete();

        if ($data) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function submitSpecification(Request $request)
    {
        $specification = new Specification;
        $specification->title = $request->input('title');
        $specification->description = $request->input('description');
        $specification->save();

        return response()->json(array(
            'data' => $specification,
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function loadSpecifications()
    {
        $data = Specification::orderBy('id', 'desc')->get();

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function loadProductCategorySpecifications($productId)
    {
        $data = Specification::orderBy('id', 'desc')->get();

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function deleteSpecification($specificationId)
    {

        $data = Specification::where('id', $specificationId)->delete();

        if ($data) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function submitProduct(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Seller account was not discoverd.'
            ), 500);
        }

        $seller = Seller::where('user_id', $userId)->first();

        $slug = lcfirst(preg_replace('/[.,\s]/', '-', $request->input('name')));
        $i = 0;
        while (Product::where('slug', $slug)->exists()) {
            $i++;
            $slug = $slug . $i;
        }

        $image = json_decode($request->input('image'), true);
        $productAttributes = json_decode($request->input('productAttributes'), true);

        $product = new Product;
        $product->brand_id = $request->input('brandId');
        $product->category_id = $request->input('categoryId');
        $product->current_stock = $request->input('current_stock');
        $product->user_id = $userId;
        $product->seller_id = $seller->id;
        $product->created_by = $userId;
        $product->slug = $slug;
        $product->name = $request->input('name');
        $product->short_description = $request->input('short_description');
        $product->description = $request->input('description');

        $product->price = $request->input('price');
        $product->special_discount = $request->input('special_discount');
        $product->special_discount_type  = 'flat';
        $product->special_discount_start = $request->input('special_discount_start');
        $product->special_discount_end  = $request->input('special_discount_end');
        $product->purchase_cost = $request->input('purchase_cost');

        $product->minimum_order_quantity = $request->input('minimum_order_quantity');
        $product->low_stock_to_notify = $request->input('low_stock_to_notify');

        $product->thumbnail = getFileLink($image);
        $product->thumbnail_id = $request->input('image_id');

        $product->is_featured = $request->input('is_featured') == 'true' ? 1 : 0;
        $product->attribute_sets =  $productAttributes;

        $product->meta_description = $request->input('description');
        $product->selected_variants = '[]';
        $product->selected_variants_ids = '[]';
        $product->images = [];

        $product->save();

        return response()->json(array(
            'data' => $product,
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function loadProducts()
    {
        $data = Product::join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->orderBy('id', 'desc')
            ->get(['products.*', 'users.user_name', 'currencies.code AS currency']);

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function loadMyProductsCatalogue()
    {
        $user = auth()->user();
        $userId = $user->id;

        $products = Product::where('products.user_id', $userId)
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->orderBy('id', 'desc')
            ->get(['products.*', 'users.user_name', 'currencies.code AS currency']);


        $formatedProducts = [];
        foreach ($products as $product) {
            $images = [];

            foreach ($product->images as $image) {
                $image['url'] = getFileLink(@$image);
                array_push($images, $image);
            }
            $product->images = $images;
            $product->is_featured = $product->is_featured === 0 ? false : true;
            $product->has_variant = $product->has_variant === 0 ? false : true;
            $product->stock_notification = $product->stock_notification === 0 ? false : true;
            $product->is_featured_on_seller = $product->is_featured_on_seller === 0 ? false : true;
            $product->is_classified = $product->is_classified === 0 ? false : true;
            $product->is_wholesale = $product->is_wholesale === 0 ? false : true;
            $product->is_digital = $product->is_digital === 0 ? false : true;
            $product->is_refundable = $product->is_refundable === 0 ? false : true;
            $product->todays_deal = $product->todays_deal === 0 ? false : true;
            $product->is_approved = $product->is_approved === 0 ? false : true;
            $product->is_catalog = $product->is_catalog === 0 ? false : true;

            $attribute_sets = [];
            foreach ($product->attribute_sets as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                $attribute_set['attributes'] = ProductAttribute::where('product_id', $product->id)->where('attribute_id', $attribute_set_id)->get();
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $product['specifications'] = ProductSpecification::where('product_specifications.productId', $product->id)
                ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
                ->orderBy('product_specifications.id', 'desc')
                ->get(['product_specifications.*', 'specifications.title']);

            $product['category'] = Category::where('id', $product->category_id)->first();
            $product['brand'] = Brand::where('id', $product->brand_id)->first();

            try {
                //$product->packaging_config = json_decode($product->packaging_config, true);
            } catch (\Exception $e) {
            }

            array_push($formatedProducts, $product);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $formatedProducts,
            'message' => 'OK'
        ), 200);
    }

    public function loadRecommendedProducts()
    {
        $products = Product::where('products.is_featured', 1)
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->orderBy('id', 'desc')
            ->get(['products.*', 'users.user_name', 'currencies.code AS currency']);


        $formatedProducts = [];
        foreach ($products as $product) {
            $images = [];

            foreach ($product->images as $image) {
                $image['url'] = getFileLink(@$image);
                array_push($images, $image);
            }
            $product->images = $images;
            $product->is_featured = $product->is_featured === 0 ? false : true;
            $product->has_variant = $product->has_variant === 0 ? false : true;
            $product->stock_notification = $product->stock_notification === 0 ? false : true;
            $product->is_featured_on_seller = $product->is_featured_on_seller === 0 ? false : true;
            $product->is_classified = $product->is_classified === 0 ? false : true;
            $product->is_wholesale = $product->is_wholesale === 0 ? false : true;
            $product->is_digital = $product->is_digital === 0 ? false : true;
            $product->is_refundable = $product->is_refundable === 0 ? false : true;
            $product->todays_deal = $product->todays_deal === 0 ? false : true;
            $product->is_approved = $product->is_approved === 0 ? false : true;
            $product->is_catalog = $product->is_catalog === 0 ? false : true;

            $attribute_sets = [];
            foreach ($product->attribute_sets as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                $attribute_set['attributes'] = ProductAttribute::where('product_id', $product->id)->where('attribute_id', $attribute_set_id)->get();
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $product['specifications'] = ProductSpecification::where('product_specifications.productId', $product->id)
                ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
                ->orderBy('product_specifications.id', 'desc')
                ->get(['product_specifications.*', 'specifications.title']);

            $product['category'] = Category::where('id', $product->category_id)->first();
            $product['brand'] = Brand::where('id', $product->brand_id)->first();

            try {
                //$product->packaging_config = json_decode($product->packaging_config, true);
            } catch (\Exception $e) {
            }

            array_push($formatedProducts, $product);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $formatedProducts,
            'message' => 'OK'
        ), 200);
    }

    public function loadFeaturedProducts()
    {
        $products = Product::where('products.is_featured', 1)
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->orderBy('id', 'desc')
            ->get(['products.*', 'users.user_name', 'currencies.code AS currency']);

        $formatedProducts = [];
        foreach ($products as $product) {
            $images = [];

            foreach ($product->images as $image) {
                $image['url'] = getFileLink(@$image);
                array_push($images, $image);
            }
            $product->images = $images;
            $product->has_variant = $product->has_variant === 0 ? false : true;
            $product->stock_notification = $product->stock_notification === 0 ? false : true;
            $product->is_featured = $product->is_featured === 0 ? false : true;
            $product->is_featured_on_seller = $product->is_featured_on_seller === 0 ? false : true;
            $product->is_classified = $product->is_classified === 0 ? false : true;
            $product->is_wholesale = $product->is_wholesale === 0 ? false : true;
            $product->is_digital = $product->is_digital === 0 ? false : true;
            $product->is_refundable = $product->is_refundable === 0 ? false : true;
            $product->todays_deal = $product->todays_deal === 0 ? false : true;
            $product->is_approved = $product->is_approved === 0 ? false : true;
            $product->is_catalog = $product->is_catalog === 0 ? false : true;

            $attribute_sets = [];
            foreach ($product->attribute_sets as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                $attribute_set['attributes'] = ProductAttribute::where('product_id', $product->id)->where('attribute_id', $attribute_set_id)->get();
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $product['specifications'] = ProductSpecification::where('product_specifications.productId', $product->id)
                ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
                ->orderBy('product_specifications.id', 'desc')
                ->get(['product_specifications.*', 'specifications.title']);

            $product['category'] = Category::where('id', $product->category_id)->first();
            $product['brand'] = Brand::where('id', $product->brand_id)->first();

            try {
                //$product->packaging_config = json_decode($product->packaging_config, true);
            } catch (\Exception $e) {
            }

            array_push($formatedProducts, $product);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $formatedProducts,
            'message' => 'OK'
        ), 200);
    }

    public function loadProductDetailsBySlug($slug)
    {
        $product = Product::where('products.slug', $slug)
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->orderBy('products.id', 'desc')
            ->first(['products.*', 'users.level', 'users.name AS authorName', 'users.user_name', 'users.email', 'users.profile_picture', 'currencies.code AS currency']);

        $images = [];
        foreach ($product->images as $image) {
            $image['url'] = getFileLink(@$image);
            array_push($images, $image);
        }
        $product->images = $images;
        $product->has_variant = $product->has_variant === 0 ? false : true;
        $product->stock_notification = $product->stock_notification === 0 ? false : true;
        $product->is_featured = $product->is_featured === 0 ? false : true;
        $product->is_featured_on_seller = $product->is_featured_on_seller === 0 ? false : true;
        $product->is_classified = $product->is_classified === 0 ? false : true;
        $product->is_wholesale = $product->is_wholesale === 0 ? false : true;
        $product->is_digital = $product->is_digital === 0 ? false : true;
        $product->is_refundable = $product->is_refundable === 0 ? false : true;
        $product->todays_deal = $product->todays_deal === 0 ? false : true;
        $product->is_approved = $product->is_approved === 0 ? false : true;
        $product->is_catalog = $product->is_catalog === 0 ? false : true;

        $attribute_sets = [];
        foreach ($product->attribute_sets as $attribute_set) {
            $attribute_set_id = $attribute_set['id'];
            $attribute_set['attributes'] = ProductAttribute::where('product_id', $product->id)->where('attribute_id', $attribute_set_id)->get();
            array_push($attribute_sets, $attribute_set);
        }
        $product->attribute_sets = $attribute_sets;

        $product['specifications'] = ProductSpecification::where('product_specifications.productId', $product->id)
            ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
            ->orderBy('product_specifications.id', 'desc')
            ->get(['product_specifications.*', 'specifications.title']);

        $product['category'] = Category::where('id', $product->category_id)->first();
        $product['brand'] = Brand::where('id', $product->brand_id)->first();

        try {
            if (auth()->user()) {
                $user = auth()->user();
                $userId = $user->id;
                $this->addProductView($userId, $product->id);

                $addressFrom = Seller::where('sellers.user_id', $product->user_id)
                    ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->first([
                        'sellers.*',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city', 'addresses.id AS addr_id'
                    ]);

                $addressTo = Address::join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->orderBy('addresses.created_at', 'desc')
                    ->where('addresses.user_id', $userId)
                    ->where('addresses.default_shipping', 1)
                    ->where('addresses.deleted', 'false')
                    ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);

                if (!isset($addressTo)) {
                    $addressTo = Address::join('states', 'addresses.state_id', '=', 'states.id')
                        ->join('cities', 'addresses.city_id', '=', 'cities.id')
                        ->join('countries', 'addresses.country_id', '=', 'countries.id')
                        ->orderBy('addresses.created_at', 'desc')
                        ->where('addresses.user_id', $userId)
                        ->where('addresses.deleted', 'false')
                        ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);
                }

                if (isset($addressTo)) {
                    $deliveryQuotation = $this->loadRecomendedDeliveryRouteCompany($addressFrom->city_id, $addressTo->city_id);

                    $actualWeight = $product->packaging_config['weight'];
                    $length = $product->packaging_config['length'];
                    $width = $product->packaging_config['width'];
                    $height = $product->packaging_config['height'];
                    $weight = $product->packaging_config['weight'];
                    $cubic_area = $length * $width * $height;

                    if (!isset($deliveryQuotation) && ($addressFrom->express_delivery_enabled === 'true' || $addressFrom->express_delivery_enabled === 'True') && ($addressFrom->country_id === $addressTo->country_id)) {
                        //If the conditions are true, load the seller as a express delivery company
                        $distance = round($this->distance($addressFrom->latitude, $addressFrom->longitude, $addressTo->latitude, $addressTo->longitude, "K"), 0, PHP_ROUND_HALF_UP);

                        $dimensional_weight = $cubic_area / $addressFrom->dimensional_divisor;
                        $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                        if ($dimensional_weight > $actualWeight) {
                            $weight = $dimensional_weight;
                        } else {
                            $weight = $actualWeight;
                        }
                        $deliveryQuotation = $addressFrom;
                        $deliveryQuotation['deliveryTime'] = 'Seller';
                        $deliveryQuotation['delivery_type'] = 'seller';
                        $deliveryQuotation['distance'] = $distance;
                        $deliveryQuotation['depature_city'] = $addressFrom->city;
                        $deliveryQuotation['destination_city'] = $addressTo->city;
                        $deliveryQuotation['delivery_company_name'] = $addressFrom->shop_name;

                        $deliveryQuotation['depature_addr_id'] = $addressFrom->addr_id;
                        $deliveryQuotation['delivery_address_id'] = $addressTo->id;

                        $deliveryQuotation['weight'] = $weight;
                        $deliveryQuotation['pkgDeliveryFee'] = ($addressFrom->express_delivery_fee * $deliveryQuotation['weight']) * $distance;
                        $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $addressFrom->express_delivery_fee ? $addressFrom->express_delivery_fee : $deliveryQuotation['pkgDeliveryFee'];

                        $product['deliveryQuotation'] = $deliveryQuotation;
                    } else {

                        $dimensional_weight = $cubic_area / $deliveryQuotation->dimensional_divisor;
                        $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                        if ($dimensional_weight > $actualWeight) {
                            $weight = $dimensional_weight;
                        } else {
                            $weight = $actualWeight;
                        }


                        $deliveryQuotation['delivery_address_id'] = $addressTo->id;
                        $deliveryQuotation['deliveryTime'] = '1-3 Days';
                        $deliveryQuotation['delivery_type'] = 'route';
                        $deliveryQuotation['weight'] = $weight;
                        $deliveryQuotation['delivery_company_name'] = $deliveryQuotation['company_name'];
                        $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation->deliveryFeePerKg * $deliveryQuotation['weight'];
                        $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $deliveryQuotation->minDeliveryFee ? $deliveryQuotation->minDeliveryFee : $deliveryQuotation['pkgDeliveryFee'];

                        $product['deliveryQuotation'] = $deliveryQuotation;
                    }

                    /*find an express option*/
                    if (!isset($product['deliveryQuotation'])) {
                        try {
                            //add express delivery companies to the list
                            $expressDeliveryCompany = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                                ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                                ->join('states', 'addresses.state_id', '=', 'states.id')
                                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                                ->where('addresses.city_id', $addressFrom->city_id)
                                ->where('addresses.deleted', 'false')
                                ->first([
                                    'delivery_companies.*',
                                    'addresses.city_id',
                                    'addresses.country_id',
                                    'addresses.latitude',
                                    'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city'
                                ]);

                            $distanceFromDeliveryCompanyToSeller = round($this->distance($expressDeliveryCompany->latitude, $expressDeliveryCompany->longitude, $addressFrom->latitude, $addressFrom->longitude, "K"), 0, PHP_ROUND_HALF_UP);
                            $distanceFromSellerToCustomer = round($this->distance($addressFrom->latitude, $addressFrom->longitude, $addressTo->latitude, $addressTo->longitude, "K"), 0, PHP_ROUND_HALF_UP);

                            $distance = $distanceFromDeliveryCompanyToSeller + $distanceFromSellerToCustomer;

                            $dimensional_weight = $cubic_area / $expressDeliveryCompany->dimensional_divisor;
                            $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                            if ($dimensional_weight > $actualWeight) {
                                $weight = $dimensional_weight;
                            } else {
                                $weight = $actualWeight;
                            }

                            $expressDeliveryCompany['deliveryTime'] = 'Express';
                            $expressDeliveryCompany['delivery_type'] = 'express';
                            $expressDeliveryCompany['distance'] = $distance;
                            $expressDeliveryCompany['depature_city'] = $addressFrom->city;
                            $expressDeliveryCompany['destination_city'] = $addressTo->city;

                            $expressDeliveryCompany['depature_addr_id'] = $expressDeliveryCompany->address_id;
                            $expressDeliveryCompany['delivery_address_id'] = $addressTo->id;

                            $expressDeliveryCompany['weight'] = $weight;
                            $expressDeliveryCompany['pkgDeliveryFee'] = ($expressDeliveryCompany->express_delivery_fee * $expressDeliveryCompany['weight']) * $distance;
                            $expressDeliveryCompany['pkgDeliveryFee'] = $expressDeliveryCompany['pkgDeliveryFee'] < $expressDeliveryCompany->express_delivery_fee ? $expressDeliveryCompany->express_delivery_fee : $expressDeliveryCompany['pkgDeliveryFee'];

                            $product['deliveryQuotation'] = $expressDeliveryCompany;
                        } catch (\Exception $ex) {
                        }
                    }
                }
            }
        } catch (\Exception $ex) {
        }

        return response()->json(array(
            'status' => 200,
            'data' => $product,
            'message' => 'OK'
        ), 200);
    }

    public function loadProductDeliveryQuotationBySlug($slug)
    {
        $user = auth()->user();
        $userId = $user->id;

        $product = Product::where('products.slug', $slug)
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->orderBy('products.id', 'desc')
            ->first(['products.*', 'users.level', 'users.name AS authorName', 'users.user_name', 'users.email', 'users.profile_picture', 'currencies.code AS currency']);

        $addressFrom = Seller::where('sellers.user_id', $product->user_id)
            ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
            ->join('states', 'addresses.state_id', '=', 'states.id')
            ->join('cities', 'addresses.city_id', '=', 'cities.id')
            ->join('countries', 'addresses.country_id', '=', 'countries.id')
            ->first([
                'sellers.*',
                'addresses.city_id',
                'addresses.country_id',
                'addresses.latitude',
                'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city', 'addresses.id AS addr_id'
            ]);

        $addressTo = Address::join('states', 'addresses.state_id', '=', 'states.id')
            ->join('cities', 'addresses.city_id', '=', 'cities.id')
            ->join('countries', 'addresses.country_id', '=', 'countries.id')
            ->orderBy('addresses.created_at', 'desc')
            ->where('addresses.user_id', $userId)
            ->where('addresses.default_shipping', 1)
            ->where('addresses.deleted', 'false')
            ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);

        if (!isset($addressTo)) {
            $addressTo = Address::join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->orderBy('addresses.created_at', 'desc')
                ->where('addresses.user_id', $userId)
                ->where('addresses.deleted', 'false')
                ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);
        }

        $deliveryQuotations = $this->loadDeliveryRouteCompanies($addressFrom->city_id, $addressTo->city_id);

        $actualWeight = $product->packaging_config['weight'];
        $length = $product->packaging_config['length'];
        $width = $product->packaging_config['width'];
        $height = $product->packaging_config['height'];
        $weight = $product->packaging_config['weight'];
        $cubic_area = $length * $width * $height;

        $deliveryQuotationsData = [];

        foreach ($deliveryQuotations as $deliveryQuotation) {
            $dimensional_weight = $cubic_area / $deliveryQuotation->dimensional_divisor;
            $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

            if ($dimensional_weight > $actualWeight) {
                $weight = $dimensional_weight;
            } else {
                $weight = $actualWeight;
            }

            $deliveryQuotation['delivery_address_id'] = $addressTo->id;
            $deliveryQuotation['deliveryTime'] = '1-3 Days';
            $deliveryQuotation['delivery_type'] = 'route';
            $deliveryQuotation['delivery_company_name'] = $deliveryQuotation->company_name;
            $deliveryQuotation['weight'] = $weight;
            $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation->deliveryFeePerKg * $deliveryQuotation['weight'];
            $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $deliveryQuotation->minDeliveryFee ? $deliveryQuotation->minDeliveryFee : $deliveryQuotation['pkgDeliveryFee'];

            array_push($deliveryQuotationsData, $deliveryQuotation);
        }

        if (($addressFrom->express_delivery_enabled === 'true' || $addressFrom->express_delivery_enabled === 'True') && ($addressFrom->country_id === $addressTo->country_id)) {
            //If the conditions are true, load the seller as a express delivery company
            $distance = round($this->distance($addressFrom->latitude, $addressFrom->longitude, $addressTo->latitude, $addressTo->longitude, "K"), 0, PHP_ROUND_HALF_UP);

            $dimensional_weight = $cubic_area / $addressFrom->dimensional_divisor;
            $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

            if ($dimensional_weight > $actualWeight) {
                $weight = $dimensional_weight;
            } else {
                $weight = $actualWeight;
            }
            $deliveryQuotation = $addressFrom;
            $deliveryQuotation['deliveryTime'] = 'Seller';
            $deliveryQuotation['delivery_type'] = 'seller';
            $deliveryQuotation['distance'] = $distance;
            $deliveryQuotation['depature_city'] = $addressFrom->city;
            $deliveryQuotation['destination_city'] = $addressTo->city;
            $deliveryQuotation['delivery_company_name'] = $deliveryQuotation->shop_name;

            $deliveryQuotation['depature_addr_id'] = $addressFrom->addr_id;
            $deliveryQuotation['delivery_address_id'] = $addressTo->id;

            $deliveryQuotation['weight'] = $weight;
            $deliveryQuotation['pkgDeliveryFee'] = ($addressFrom->express_delivery_fee * $deliveryQuotation['weight']) * $distance;
            $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $addressFrom->express_delivery_fee ? $addressFrom->express_delivery_fee : $deliveryQuotation['pkgDeliveryFee'];

            array_push($deliveryQuotationsData, $deliveryQuotation);
        }

        try {
            //add express delivery companies to the list
            $expressDeliveryCompanies = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                ->join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->where('addresses.city_id', $addressFrom->city_id)
                ->where('addresses.deleted', 'false')->get([
                    'delivery_companies.*',
                    'addresses.city_id',
                    'addresses.country_id',
                    'addresses.latitude',
                    'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city'
                ]);

            foreach ($expressDeliveryCompanies as $expressDeliveryCompany) {
                $distanceFromDeliveryCompanyToSeller = round($this->distance($expressDeliveryCompany->latitude, $expressDeliveryCompany->longitude, $addressFrom->latitude, $addressFrom->longitude, "K"), 0, PHP_ROUND_HALF_UP);
                $distanceFromSellerToCustomer = round($this->distance($addressFrom->latitude, $addressFrom->longitude, $addressTo->latitude, $addressTo->longitude, "K"), 0, PHP_ROUND_HALF_UP);

                $distance = $distanceFromDeliveryCompanyToSeller + $distanceFromSellerToCustomer;

                $dimensional_weight = $cubic_area / $expressDeliveryCompany->dimensional_divisor;
                $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                if ($dimensional_weight > $actualWeight) {
                    $weight = $dimensional_weight;
                } else {
                    $weight = $actualWeight;
                }

                $expressDeliveryCompany['deliveryTime'] = 'Express';
                $expressDeliveryCompany['delivery_type'] = 'express';
                $expressDeliveryCompany['distance'] = $distance;
                $expressDeliveryCompany['depature_city'] = $addressFrom->city;
                $expressDeliveryCompany['destination_city'] = $addressTo->city;
                $expressDeliveryCompany['delivery_company_name'] = $expressDeliveryCompany->company_name;

                $expressDeliveryCompany['depature_addr_id'] = $expressDeliveryCompany->address_id;
                $expressDeliveryCompany['delivery_address_id'] = $addressTo->id;

                $expressDeliveryCompany['weight'] = $weight;
                $expressDeliveryCompany['pkgDeliveryFee'] = ($expressDeliveryCompany->express_delivery_fee * $expressDeliveryCompany['weight']) * $distance;
                $expressDeliveryCompany['pkgDeliveryFee'] = $expressDeliveryCompany['pkgDeliveryFee'] < $expressDeliveryCompany->express_delivery_fee ? $expressDeliveryCompany->express_delivery_fee : $expressDeliveryCompany['pkgDeliveryFee'];

                array_push($deliveryQuotationsData, $expressDeliveryCompany);
            }
        } catch (\Exception $ex) {
        }

        return response()->json(array(
            'status' => 200,
            'data' => $deliveryQuotationsData,
            'message' => 'OK'
        ), 200);
    }

    private function addProductView($userId, $productId)
    {

        $result = ProductView::where('user_id', $userId)
            ->where('product_id', $productId)
            ->get();

        if (sizeof($result) > 0) {
            return;
        }

        $productView = new ProductView;
        $productView->user_id = $userId;
        $productView->product_id = $productId;
        $productView->save();
    }

    public function loadProductDetails($productId)
    {
        $product = Product::where('products.id', $productId)
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->orderBy('products.id', 'desc')
            ->first(['products.*', 'users.level', 'users.name AS authorName', 'users.user_name', 'users.email', 'users.profile_picture', 'currencies.code AS currency']);

        $images = [];
        foreach ($product->images as $image) {
            $image['url'] = getFileLink(@$image);
            array_push($images, $image);
        }
        $product->images = $images;
        $product->has_variant = $product->has_variant === 0 ? false : true;
        $product->stock_notification = $product->stock_notification === 0 ? false : true;
        $product->is_featured = $product->is_featured === 0 ? false : true;
        $product->is_featured_on_seller = $product->is_featured_on_seller === 0 ? false : true;
        $product->is_classified = $product->is_classified === 0 ? false : true;
        $product->is_wholesale = $product->is_wholesale === 0 ? false : true;
        $product->is_digital = $product->is_digital === 0 ? false : true;
        $product->is_refundable = $product->is_refundable === 0 ? false : true;
        $product->todays_deal = $product->todays_deal === 0 ? false : true;
        $product->is_approved = $product->is_approved === 0 ? false : true;
        $product->is_catalog = $product->is_catalog === 0 ? false : true;

        $attribute_sets = [];
        foreach ($product->attribute_sets as $attribute_set) {
            $attribute_set_id = $attribute_set['id'];
            $attribute_set['attributes'] = ProductAttribute::where('product_id', $product->id)->where('attribute_id', $attribute_set_id)->get();
            array_push($attribute_sets, $attribute_set);
        }
        $product->attribute_sets = $attribute_sets;

        $product['specifications'] = ProductSpecification::where('product_specifications.productId', $productId)
            ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
            ->orderBy('product_specifications.id', 'desc')
            ->get(['product_specifications.*', 'specifications.title']);

        $product['category'] = Category::where('id', $product->category_id)->first();
        $product['brand'] = Brand::where('id', $product->brand_id)->first();

        return response()->json(array(
            'status' => 200,
            'data' => $product,
            'message' => 'OK'
        ), 200);
    }

    public function deleteProduct($productId)
    {

        $data = Product::where('id', $productId)->delete();

        if ($data) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function submitProductPhoto(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $image = json_decode($request->input('image'), true);


        $product = Product::where('id', $request->input('productId'))->first();
        $images = $product->images;

        // Add a new image to the array
        $images[] = $image;

        // Update the "images" attribute and save the model
        $product->images = $images;
        $product->update();


        return response()->json(array(
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function deleteProductPhoto(Request $request)
    {
        $product = Product::where('id', $request->input('productId'))->first();
        $images = $product->images;
        $productImages = array();

        for ($i = 0; $i < sizeof($images); $i++) {
            $image = $images[$i];
            if ($image['id'] !== (int) $request->input('imageId')) {
                array_push($productImages, $image);
            }
        }
        // Update the "images" attribute and save the model
        $product->images = $productImages;
        $product->update();

        return response()->json(array(
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function submitShopingProductAttributeOption(Request $request)
    {
        $value = NULL;

        if ($request->input('attribute_form') === "image") {
            $value = getFileLink(json_decode($request->input('image'), true));
        } else {
            $value = $request->input('value');
        }

        $productAttribute = new ProductAttribute();
        $productAttribute->product_id = $request->input('productId');
        $productAttribute->attribute_id = $request->input('attribute_id');
        $productAttribute->attribute_form = $request->input('attribute_form');
        $productAttribute->price = $request->input('price') !== null ? $request->input('price') : 0;
        $productAttribute->isDefault = $request->input('isDefault');
        $productAttribute->label = $request->input('label');
        $productAttribute->value = $value;
        $productAttribute->save();

        return response()->json(array(
            'data' => $productAttribute,
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function loadProductAttributes($productId)
    {
        $productAttributes = ProductAttribute::where('product_id', $productId)->get();

        return response()->json(array(
            'status' => 200,
            'data' => $productAttributes,
            'message' => 'OK'
        ), 200);
    }

    public function deleteProductAttribute($attributeId)
    {
        $result = ProductAttribute::where('id', $attributeId)->delete();

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function submitShopingProductSpecification(Request $request)
    {
        $specification = new ProductSpecification;
        $specification->productId = $request->input('productId');
        $specification->specificationId = $request->input('specificationId');
        $specification->value = $request->input('value');
        $specification->save();

        return response()->json(array(
            'data' => $specification,
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function deleteShopingProductSpecification($specificationId)
    {
        $result = ProductSpecification::where('id', $specificationId)->delete();

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function loadShopingProductSpecifications($productId)
    {
        $productSpecifications = ProductSpecification::where('product_specifications.productId', $productId)
            ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
            ->orderBy('product_specifications.id', 'desc')
            ->get(['product_specifications.*', 'specifications.title']);

        return response()->json(array(
            'status' => 200,
            'data' => $productSpecifications,
            'message' => 'OK'
        ), 200);
    }

    public function submitShoppingProductDiscussion(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;
        $ip_address = User::getClientIP();

        $shoppingProductDiscussion = new ProductDiscussion;
        $shoppingProductDiscussion->userId = $userId;
        $shoppingProductDiscussion->message = $request->input('message');
        $shoppingProductDiscussion->productId = $request->input('productId');
        $shoppingProductDiscussion->ip_address = $ip_address;
        $shoppingProductDiscussion->save();

        return response()->json($shoppingProductDiscussion, 200);
    }

    public function submitShoppingProductDiscussionReply(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $shoppingProductDiscussion = new ProductDiscussion;
        $shoppingProductDiscussion->userId = $userId;
        $shoppingProductDiscussion->message = $request->input('message');
        $shoppingProductDiscussion->productId = $request->input('productId');
        $shoppingProductDiscussion->ip_address = User::getClientIP();
        $shoppingProductDiscussion->isAComment = 'true';
        $shoppingProductDiscussion->discussionId = $request->input('discussionId');
        $shoppingProductDiscussion->save();

        $authorId = (int) ProductDiscussion::where('id', $shoppingProductDiscussion->discussionId)->first()->userId;
        if ($shoppingProductDiscussion->userId !== $authorId) {
            $product = Product::where('id', $request->input('productId'))->first();
            NotificationsController::saveNotification(
                $userId,
                $authorId,
                NotificationsController::$notification_media_all,
                NotificationsController::$notification_key_new_shopping_product_comment_reply,
                $request->input('message'),
                $product->thumbnail,
                $shoppingProductDiscussion->id
            );
        }

        return response()->json($shoppingProductDiscussion->all(), 200);
    }

    public function getShoppingProductDiscussions($productId)
    {
        $result = ProductDiscussion::join('users', 'product_discussions.userId', '=', 'users.id')
            ->where('product_discussions.isAComment', 'false')
            ->orderBy('product_discussions.created_at', 'desc')
            ->where('product_discussions.productId', $productId)
            ->get([
                'product_discussions.*',
                'users.level', 'users.name', 'users.user_name', 'users.profile_picture'
            ]);


        $data = array();
        for ($i = 0; $i < sizeof($result); $i++) {
            $sample_array = array();
            $sample_array = $result[$i];
            $sample_array->altComment = self::fetchShoppingProductDiscussionLastReply($result[$i]->id);
            array_push($data, $sample_array);
        }
        $postData = array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function getShoppingLastProductDiscussion($productId)
    {
        $result = ProductDiscussion::join('users', 'product_discussions.userId', '=', 'users.id')
            ->where('product_discussions.isAComment', 'false')
            ->orderBy('product_discussions.created_at', 'desc')
            ->where('product_discussions.productId', $productId)
            ->first([
                'product_discussions.*',
                'users.level', 'users.name', 'users.user_name', 'users.profile_picture'
            ]);

        if ($result !== null) {
            $result->altComment = self::fetchShoppingProductDiscussionLastReply($result->id);
        }

        $postData = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public static function fetchShoppingProductDiscussionDetails($discussionId)
    {

        $result = ProductDiscussion::join('users', 'product_discussions.userId', '=', 'users.id')
            ->orderBy('product_discussions.created_at', 'desc')
            ->where('product_discussions.id', $discussionId)
            ->first([
                'product_discussions.*',
                'users.level', 'users.name', 'users.user_name', 'users.profile_picture'
            ]);

        if ($result !== null) {
            $result->altComment = self::fetchShoppingProductDiscussionLastReply($result->id);
        }

        $postData = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function getShoppingProductDiscussionReplies($discussionId)
    {

        $result = ProductDiscussion::join('users', 'product_discussions.userId', '=', 'users.id')
            ->where('product_discussions.isAComment', 'true')
            ->orderBy('product_discussions.created_at', 'desc')
            ->where('product_discussions.discussionId', $discussionId)
            ->get([
                'product_discussions.*',
                'users.level', 'users.name', 'users.user_name', 'users.profile_picture'
            ]);

        $postData = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public static function fetchShoppingProductDiscussionReplyDetails($replyId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = ProductDiscussion::join('users', 'product_discussions.userId', '=', 'users.id')
            ->where('product_discussions.isAComment', 'true')
            ->orderBy('product_discussions.created_at', 'desc')
            ->where('product_discussions.id', $replyId)
            ->first([
                'product_discussions.*',
                'users.level', 'users.name', 'users.user_name', 'users.profile_picture'
            ]);

        $postData = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public static function fetchShoppingProductDiscussionLastReply($discussionId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = ProductDiscussion::join('users', 'product_discussions.userId', '=', 'users.id')
            ->where('product_discussions.isAComment', 'true')
            ->orderBy('product_discussions.created_at', 'desc')
            ->where('product_discussions.discussionId', $discussionId)
            ->first(['product_discussions.*', 'users.level', 'users.name', 'users.user_name', 'users.profile_picture']);

        return $result;
    }

    public function switchProduuctFeaturedStatus(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $productId = $request->input('productId');
        $isFeatured = $request->input('is_featured');

        $is_featured = $isFeatured === "true" ? 1 : 0;

        $shopingProductData = Product::where('id', $productId)->first();
        if ($shopingProductData !== null) {
            $product =  Product::where('id', $productId)
                ->update(['is_featured' => $is_featured]);

            $postData = array(
                'status' => 200,
                'data' => $product,
                'message' => 'OK'
            );
            return response()->json($postData, 200);
        } else {
            $postData = array(
                'status' => 500,
                'message' => 'Prodict not found'
            );
            return response()->json($postData, 500);
        }
    }

    public function getShoppingCategory($categoryId)
    {
        $category = Category::where('id', $categoryId)
            ->orderBy('created_at', 'desc')
            ->first();
        $category->is_featured = $category->is_featured === 0 ? false : true;

        $postData = array(
            'status' => 200,
            'data' => $category,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function getShopingSubCategories($categoryId)
    {
        $result = Category::where('parent_id', $categoryId)
            ->orderBy('created_at', 'desc')
            ->get();

        $postData = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function loadCategoryProducts($categoryId)
    {
        $data = Product::join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->where('products.category_id', $categoryId)
            ->orderBy('id', 'desc')
            ->get(['products.*', 'users.user_name', 'currencies.code AS currency']);

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function switchCategoryFeaturedStatus(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $categoryId = $request->input('categoryId');
        $isFeatured = $request->input('is_featured');

        $is_featured = $isFeatured === "true" ? 1 : 0;

        $shopingProductData = Category::where('id', $categoryId)->first();
        if ($shopingProductData !== null) {
            $category =  Category::where('id', $categoryId)
                ->update(['is_featured' => $is_featured]);

            $postData = array(
                'status' => 200,
                'data' => $category,
                'message' => 'OK'
            );
            return response()->json($postData, 200);
        } else {
            $postData = array(
                'status' => 500,
                'message' => 'Category not found'
            );
            return response()->json($postData, 500);
        }
    }

    public function submitCollectionPoint(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $imageUrl = getFileLink(json_decode($request->input('image'), true));

        $shoppingCollectionPoint = new ShoppingCollectionPoint;
        $shoppingCollectionPoint->userId = $userId;
        $shoppingCollectionPoint->label = $request->input('label');
        $shoppingCollectionPoint->description = $request->input('description');
        $shoppingCollectionPoint->imageUrl = $imageUrl;

        $shoppingCollectionPoint->address = $request->input('address');
        $shoppingCollectionPoint->latitude = $request->input('latitude');
        $shoppingCollectionPoint->longitude = $request->input('longitude');

        $shoppingCollectionPoint->email = $request->input('email');
        $shoppingCollectionPoint->website = $request->input('website');
        $shoppingCollectionPoint->phone = $request->input('phone');
        $shoppingCollectionPoint->save();

        return response()->json($shoppingCollectionPoint->all(), 200);
    }

    public function fetchAllCollectionPoints()
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = ShoppingCollectionPoint::join('users', 'shopping_collection_points.userId', '=', 'users.id')
            ->where('shopping_collection_points.deleted', 'false')
            ->orderBy('shopping_collection_points.created_at', 'desc')
            ->get(['shopping_collection_points.*', 'users.level', 'users.name', 'users.user_name', 'users.profile_picture']);

        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function fetchCollectionPointDetails($collectionPointId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = ShoppingCollectionPoint::join('users', 'shopping_collection_points.userId', '=', 'users.id')
            ->where('shopping_collection_points.id', $collectionPointId)
            ->where('shopping_collection_points.deleted', 'false')
            ->orderBy('shopping_collection_points.created_at', 'desc')
            ->first(['shopping_collection_points.*', 'users.level', 'users.name', 'users.user_name', 'users.profile_picture']);

        $result->gallery = ShoppingCollectionPointGallery::where('deleted', 'false')
            ->where('collectionPointId', $collectionPointId)->get();

        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function fetchNearestCollectionPoints(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');
        //To search by kilometers instead of miles, replace 3959 with 6371.
        $result = DB::select("SELECT *, ( 6371 * acos( cos( radians($latitude) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians($longitude) ) + sin( radians($latitude) ) * sin( radians( latitude ) ) ) ) AS distance FROM service_points WHERE deleted='false' HAVING distance < 25 ORDER BY distance LIMIT 0 , 20 ");

        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function fetchNearestCollectionPoint(Request $request)
    {
        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');
        //To search by kilometers instead of miles, replace 3959 with 6371.
        $result = collect(DB::select("SELECT *, ( 6371 * acos( cos( radians($latitude) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians($longitude) ) + sin( radians($latitude) ) * sin( radians( latitude ) ) ) ) AS distance FROM service_points WHERE deleted='false' HAVING distance < 25 ORDER BY distance LIMIT 1 "))->first();

        return array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
    }

    public function sendCollectionPointGalleryImage(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $path = $request->file('image')->store('storage/images', ['disk' => 'exchange']);

        $shoppingCollectionPointGallery = new ShoppingCollectionPointGallery;
        $shoppingCollectionPointGallery->userId = $userId;
        $shoppingCollectionPointGallery->collectionPointId = $request->input('collectionPointId');
        $shoppingCollectionPointGallery->imageUrl = $path;
        $shoppingCollectionPointGallery->save();

        $postData = array(
            'status' => 200,
            'data' => $shoppingCollectionPointGallery->all(),
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function getShoppingCollectionPointGallery($collectionPointId)
    {
        $result = ShoppingCollectionPointGallery::where('deleted', 'false')
            ->where('collectionPointId', $collectionPointId)->get();

        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function fetchCollectionPointAdmins($collectionPointId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = ShoppingCollectionPointAdmin::join('users', 'service_point_admins.adminId', '=', 'users.id')
            ->where('service_point_admins.deleted', 'false')
            ->where('service_point_admins.collectionPointId', $collectionPointId)
            ->orderBy('service_point_admins.created_at', 'desc')
            ->get(['users.*']);

        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function submitSliderImage(Request $request)
    {
        $sliderImage = new SliderImage;
        $sliderImage->fileId = $request->input('fileId');
        $sliderImage->save();

        $postData = array(
            'status' => 200,
            'data' => $sliderImage,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function fetchSliderImages()
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = SliderImage::join('files', 'slider_images.fileId', '=', 'files.id')
            ->orderBy('slider_images.created_at', 'desc')
            ->get(['files.*', 'slider_images.fileId']);

        $sliderImages = array();
        for ($i = 0; $i < sizeof($result); $i++) {
            $sample_array = array();
            $sample_array = $result[$i];
            $url = getFileLink($sample_array);
            $sample_array['url'] = $url;
            array_push($sliderImages, $sample_array);
        }

        $data = array(
            'status' => 200,
            'data' => $sliderImages,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function deleteSliderImage($fileId)
    {
        $product = SliderImage::where('fileId', $fileId)->delete();

        return response()->json(array(
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function submitCamaignsBanner(Request $request)
    {
        $camaignsBanner = new CamaignsBanner;
        $camaignsBanner->fileId = $request->input('fileId');
        $camaignsBanner->save();

        $postData = array(
            'status' => 200,
            'data' => $camaignsBanner,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function fetchCamaignsBanner()
    {
        $user = auth()->user();
        $userId = $user->id;

        $camaignsBanner = CamaignsBanner::join('files', 'camaigns_banners.fileId', '=', 'files.id')
            ->orderBy('camaigns_banners.created_at', 'desc')
            ->first(['files.*', 'camaigns_banners.fileId']);

        $url = getFileLink($camaignsBanner);
        $camaignsBanner['url'] = $url;

        $data = array(
            'status' => 200,
            'data' => $camaignsBanner,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function submitState(Request $request)
    {
        $state = new State;
        $state->countryId = $request->input('countryId');
        $state->name = $request->input('name');
        $state->save();

        $postData = array(
            'status' => 200,
            'data' => $state,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function fetchStates()
    {
        $states = State::join('countries', 'states.countryId', '=', 'countries.id')
            ->orderBy('states.created_at', 'desc')
            ->get(['states.*', 'countries.name AS country', 'countries.code AS country_code']);

        $data = array(
            'status' => 200,
            'data' => $states,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function getCountryStates($countryId)
    {
        $states = State::join('countries', 'states.countryId', '=', 'countries.id')
            ->orderBy('states.created_at', 'desc')
            ->where('states.countryId', $countryId)
            ->get(['states.*', 'countries.name AS country', 'countries.code AS country_code']);

        $data = array(
            'status' => 200,
            'data' => $states,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function deleteState($stateId)
    {
        State::where('id', $stateId)->delete();

        return response()->json(array(
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function submitCity(Request $request)
    {
        $city = new City;
        $city->stateId = $request->input('stateId');
        $city->name = $request->input('name');
        $city->save();

        $postData = array(
            'status' => 200,
            'data' => $city,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function fetchCities()
    {
        $cities = City::join('states', 'cities.stateId', '=', 'states.id')
            ->join('countries', 'states.countryId', '=', 'countries.id')
            ->orderBy('cities.created_at', 'desc')
            ->get(['cities.*', 'states.name AS state', 'countries.name AS country']);

        $data = array(
            'status' => 200,
            'data' => $cities,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function getStatecities($stateId)
    {
        $cities = City::join('states', 'cities.stateId', '=', 'states.id')
            ->join('countries', 'states.countryId', '=', 'countries.id')
            ->orderBy('cities.created_at', 'desc')
            ->where('cities.stateId', $stateId)
            ->get(['cities.*', 'states.name AS state', 'countries.name AS country']);

        $data = array(
            'status' => 200,
            'data' => $cities,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function deleteCity($cityId)
    {
        City::where('id', $cityId)->delete();

        return response()->json(array(
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function loadViewedProducts()
    {
        $user = auth()->user();
        $userId = $user->id;

        $products = ProductView::where('product_views.user_id', $userId)
            ->join('products', 'products.id', '=', 'product_views.product_id')
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->orderBy('product_views.created_at', 'desc')
            ->get(['products.*', 'users.user_name', 'currencies.code AS currency']);

        $formatedProducts = [];
        foreach ($products as $product) {
            $images = [];

            foreach (json_decode($product->images, true) as $image) {
                $image['url'] = getFileLink(@$image);
                array_push($images, $image);
            }
            $product->images = $images;
            $product->has_variant = $product->has_variant === 0 ? false : true;
            $product->stock_notification = $product->stock_notification === 0 ? false : true;
            $product->is_featured = $product->is_featured === 0 ? false : true;
            $product->is_featured_on_seller = $product->is_featured_on_seller === 0 ? false : true;
            $product->is_classified = $product->is_classified === 0 ? false : true;
            $product->is_wholesale = $product->is_wholesale === 0 ? false : true;
            $product->is_digital = $product->is_digital === 0 ? false : true;
            $product->is_refundable = $product->is_refundable === 0 ? false : true;
            $product->todays_deal = $product->todays_deal === 0 ? false : true;
            $product->is_approved = $product->is_approved === 0 ? false : true;
            $product->is_catalog = $product->is_catalog === 0 ? false : true;

            $attribute_sets = [];
            foreach (json_decode($product->attribute_sets, true) as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                $attribute_set['attributes'] = ProductAttribute::where('product_id', $product->id)->where('attribute_id', $attribute_set_id)->get();
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $product['specifications'] = ProductSpecification::where('product_specifications.productId', $product->id)
                ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
                ->orderBy('product_specifications.id', 'desc')
                ->get(['product_specifications.*', 'specifications.title']);

            try {
                //$product->packaging_config = json_decode($product->packaging_config, true);
            } catch (\Exception $e) {
            }

            array_push($formatedProducts, $product);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $formatedProducts,
            'message' => 'OK'
        ), 200);
    }

    public function addToWishlist(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = Wishlist::where('user_id', $userId)
            ->where('product_id', $request->input('productId'))
            ->get();

        if (sizeof($result) > 0) {
            Wishlist::where('user_id', $userId)
                ->where('product_id', $request->input('productId'))
                ->delete();
            return;
        }

        $wishlist = new Wishlist;
        $wishlist->user_id = $userId;
        $wishlist->product_id = $request->input('productId');
        $wishlist->save();
    }

    public function loadWishlist()
    {
        $user = auth()->user();
        $userId = $user->id;

        $products = Wishlist::where('wishlists.user_id', $userId)
            ->join('products', 'products.id', '=', 'wishlists.product_id')
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->orderBy('wishlists.created_at', 'desc')
            ->get(['products.*', 'users.user_name', 'currencies.code AS currency']);

        $formatedProducts = [];
        foreach ($products as $product) {
            $images = [];

            foreach (json_decode($product->images, true) as $image) {
                $image['url'] = getFileLink(@$image);
                array_push($images, $image);
            }
            $product->images = $images;
            $product->has_variant = $product->has_variant === 0 ? false : true;
            $product->stock_notification = $product->stock_notification === 0 ? false : true;
            $product->is_featured = $product->is_featured === 0 ? false : true;
            $product->is_featured_on_seller = $product->is_featured_on_seller === 0 ? false : true;
            $product->is_classified = $product->is_classified === 0 ? false : true;
            $product->is_wholesale = $product->is_wholesale === 0 ? false : true;
            $product->is_digital = $product->is_digital === 0 ? false : true;
            $product->is_refundable = $product->is_refundable === 0 ? false : true;
            $product->todays_deal = $product->todays_deal === 0 ? false : true;
            $product->is_approved = $product->is_approved === 0 ? false : true;
            $product->is_catalog = $product->is_catalog === 0 ? false : true;

            $attribute_sets = [];
            foreach (json_decode($product->attribute_sets, true) as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                $attribute_set['attributes'] = ProductAttribute::where('product_id', $product->id)->where('attribute_id', $attribute_set_id)->get();
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $product['specifications'] = ProductSpecification::where('product_specifications.productId', $product->id)
                ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
                ->orderBy('product_specifications.id', 'desc')
                ->get(['product_specifications.*', 'specifications.title']);

            try {
                //$product->packaging_config = json_decode($product->packaging_config, true);
            } catch (\Exception $e) {
            }

            array_push($formatedProducts, $product);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $formatedProducts,
            'message' => 'OK'
        ), 200);
    }

    public function addToCart(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $validator = Validator::make($request->all(), [
            'product_id'             => 'required',
            'order_quantity'         => 'required',
            'delivery_address_id'    => 'required',
            'delivery_company_id'    => 'required',
            'delivery_type'          => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }

        if (!Product::where('id', $request->input('product_id'))->where('status', 'unpublished')->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Invalid Product ID was provided.'
            ), 500);
        }

        if (!Address::where('id', $request->input('delivery_address_id'))->where('user_id', $userId)->where('deleted', 'false')->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Invalid Address ID was provided.'
            ), 500);
        }

        if ($request->input('delivery_type') !== 'route' && $request->input('delivery_type') !== 'seller' && $request->input('delivery_type') !== 'express') {
            return response()->json(array(
                'status' => 500,
                'message' => 'Invalid Delivery Type was provided.'
            ), 500);
        }

        $product = Product::where('id', $request->input('product_id'))->first();

        $addressFrom = Seller::where('sellers.user_id', $product->user_id)
            ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
            ->join('states', 'addresses.state_id', '=', 'states.id')
            ->join('cities', 'addresses.city_id', '=', 'cities.id')
            ->join('countries', 'addresses.country_id', '=', 'countries.id')
            ->first([
                'sellers.*',
                'addresses.city_id',
                'addresses.country_id',
                'addresses.latitude',
                'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city', 'addresses.id AS addr_id'
            ]);

        $addressTo = Address::join('states', 'addresses.state_id', '=', 'states.id')
            ->join('cities', 'addresses.city_id', '=', 'cities.id')
            ->join('countries', 'addresses.country_id', '=', 'countries.id')
            ->where('addresses.id', $request->input('delivery_address_id'))
            ->where('addresses.user_id', $userId)
            ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);

        $deliveryQuotation = array();

        $actualWeight = $product->packaging_config['weight'];
        $length = $product->packaging_config['length'];
        $width = $product->packaging_config['width'];
        $height = $product->packaging_config['height'];
        $weight = $product->packaging_config['weight'];
        $cubic_area = $length * $width * $height;

        if ($request->input('delivery_type') === 'seller') {
            $distance = round($this->distance($addressFrom->latitude, $addressFrom->longitude, $addressTo->latitude, $addressTo->longitude, "K"), 0, PHP_ROUND_HALF_UP);

            $dimensional_weight = $cubic_area / $addressFrom->dimensional_divisor;
            $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

            if ($dimensional_weight > $actualWeight) {
                $weight = $dimensional_weight;
            } else {
                $weight = $actualWeight;
            }
            $deliveryQuotation = $addressFrom;
            $deliveryQuotation['deliveryTime'] = 'Seller';
            $deliveryQuotation['delivery_type'] = 'seller';
            $deliveryQuotation['distance'] = $distance;
            $deliveryQuotation['depature_city'] = $addressFrom->city;
            $deliveryQuotation['destination_city'] = $addressTo->city;
            $deliveryQuotation['company_name'] = $addressFrom->shop_name;

            $deliveryQuotation['depature_addr_id'] = $addressFrom->addr_id;
            $deliveryQuotation['delivery_address_id'] = $addressTo->id;

            $deliveryQuotation['weight'] = $weight;
            $deliveryQuotation['pkgDeliveryFee'] = ($addressFrom->express_delivery_fee * $deliveryQuotation['weight']) * $distance;
            $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $addressFrom->express_delivery_fee ? $addressFrom->express_delivery_fee : $deliveryQuotation['pkgDeliveryFee'];
        } else if ($request->input('delivery_type') === 'route') {
            $deliveryQuotation = $this->loadDeliveryCompanyRoute($addressFrom->city_id, $addressTo->city_id, $request->input('delivery_company_id'));

            $dimensional_weight = $cubic_area / $deliveryQuotation->dimensional_divisor;
            $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

            if ($dimensional_weight > $actualWeight) {
                $weight = $dimensional_weight;
            } else {
                $weight = $actualWeight;
            }

            $deliveryQuotation['deliveryTime'] = '1-3 Days';
            $deliveryQuotation['delivery_type'] = 'route';
            $deliveryQuotation['weight'] = $weight;
            $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation->deliveryFeePerKg * $deliveryQuotation['weight'];
            $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $deliveryQuotation->minDeliveryFee ? $deliveryQuotation->minDeliveryFee : $deliveryQuotation['pkgDeliveryFee'];
        } else if ($request->input('delivery_type') === 'express') {
            $deliveryQuotation = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                ->join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->where('delivery_companies.id', $request->input('delivery_company_id'))
                ->where('addresses.deleted', 'false')
                ->first([
                    'delivery_companies.*',
                    'addresses.city_id',
                    'addresses.country_id',
                    'addresses.latitude',
                    'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city'
                ]);

            $distanceFromDeliveryCompanyToSeller = round($this->distance($deliveryQuotation->latitude, $deliveryQuotation->longitude, $addressFrom->latitude, $addressFrom->longitude, "K"), 0, PHP_ROUND_HALF_UP);
            $distanceFromSellerToCustomer = round($this->distance($addressFrom->latitude, $addressFrom->longitude, $addressTo->latitude, $addressTo->longitude, "K"), 0, PHP_ROUND_HALF_UP);

            $distance = $distanceFromDeliveryCompanyToSeller + $distanceFromSellerToCustomer;

            $dimensional_weight = $cubic_area / $deliveryQuotation->dimensional_divisor;
            $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

            if ($dimensional_weight > $actualWeight) {
                $weight = $dimensional_weight;
            } else {
                $weight = $actualWeight;
            }

            $deliveryQuotation['deliveryTime'] = 'Express';
            $deliveryQuotation['delivery_type'] = 'express';
            $deliveryQuotation['distance'] = $distance;
            $deliveryQuotation['depature_city'] = $addressFrom->city;
            $deliveryQuotation['destination_city'] = $addressTo->city;

            $deliveryQuotation['depature_addr_id'] = $deliveryQuotation->address_id;
            $deliveryQuotation['delivery_address_id'] = $addressTo->id;

            $deliveryQuotation['weight'] = $weight;
            $deliveryQuotation['pkgDeliveryFee'] = ($deliveryQuotation->express_delivery_fee * $deliveryQuotation['weight']) * $distance;
            $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $deliveryQuotation->express_delivery_fee ? $deliveryQuotation->express_delivery_fee : $deliveryQuotation['pkgDeliveryFee'];
        }

        $cart = Cart::where('user_id', $userId)
            ->where('product_id', $request->input('product_id'))
            ->where('attributes', $request->input('attributes'))
            ->first();

        if (isset($cart)) {
            $cart->order_quantity = $request->input('order_quantity');

            $cart->delivery_cost = $deliveryQuotation['pkgDeliveryFee'] * $request->input('order_quantity');
            $cart->delivery_type = $request->input('delivery_type');
            $cart->delivery_company_id = $deliveryQuotation['id'];
            $cart->delivery_address = $addressTo->address;
            $cart->delivery_address_id = $request->input('delivery_address_id');
            $cart->delivery_country_id = $addressTo->country_id;
            $cart->delivery_state_id = $addressTo->state_id;
            $cart->delivery_city_id = $addressTo->city_id;
            $cart->delivery_latitude = $addressTo->latitude;
            $cart->delivery_longitude = $addressTo->longitude;
            $cart->delivery_postal_code = $addressTo->postal_code;

            $cart->update();

            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        }

        $cart = new Cart;
        $cart->user_id = $userId;
        $cart->product_id = $request->input('product_id');
        $cart->order_quantity = $request->input('order_quantity');
        $cart->attributes = $request->input('attributes');

        $cart->delivery_cost = $deliveryQuotation['pkgDeliveryFee'] * $request->input('order_quantity');
        $cart->delivery_type = $request->input('delivery_type');
        $cart->delivery_company_id = $deliveryQuotation['id'];
        $cart->delivery_address = $addressTo->address;
        $cart->delivery_address_id = $request->input('delivery_address_id');
        $cart->delivery_country_id = $addressTo->country_id;
        $cart->delivery_state_id = $addressTo->state_id;
        $cart->delivery_city_id = $addressTo->city_id;
        $cart->delivery_latitude = $addressTo->latitude;
        $cart->delivery_longitude = $addressTo->longitude;
        $cart->delivery_postal_code = $addressTo->postal_code;
        $cart->save();

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function loadCartlist()
    {
        $user = auth()->user();
        $userId = $user->id;

        $products = Cart::where('carts.user_id', $userId)
            ->join('products', 'products.id', '=', 'carts.product_id')
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->join('addresses', 'carts.delivery_address_id', '=', 'addresses.id')
            ->join('states', 'carts.delivery_state_id', '=', 'states.id')
            ->join('cities', 'carts.delivery_city_id', '=', 'cities.id')
            ->join('countries', 'carts.delivery_country_id', '=', 'countries.id')
            ->join('delivery_companies', 'carts.delivery_company_id', '=', 'delivery_companies.id')

            ->orderBy('carts.created_at', 'desc')
            ->get([
                'products.*',
                'carts.order_quantity',
                'carts.attributes AS cart_attributes',
                'carts.id AS cart_id',
                'carts.delivery_cost',
                'carts.delivery_type',
                'carts.delivery_company_id',
                'carts.delivery_address_id',
                'carts.delivery_country_id',
                'carts.delivery_state_id',
                'carts.delivery_city_id',
                'carts.delivery_latitude',
                'carts.delivery_longitude',
                'carts.delivery_postal_code',
                'users.user_name',
                'states.name AS state',
                'countries.name AS country',
                'cities.name AS city',
                'delivery_companies.company_name', 'currencies.code AS currency'
            ]);

        $formatedProducts = [];
        foreach ($products as $product) {
            $images = [];

            foreach (json_decode($product->images, true) as $image) {
                $image['url'] = getFileLink(@$image);
                array_push($images, $image);
            }
            $product->images = $images;
            $product->has_variant = $product->has_variant === 0 ? false : true;
            $product->stock_notification = $product->stock_notification === 0 ? false : true;
            $product->is_featured = $product->is_featured === 0 ? false : true;
            $product->is_featured_on_seller = $product->is_featured_on_seller === 0 ? false : true;
            $product->is_classified = $product->is_classified === 0 ? false : true;
            $product->is_wholesale = $product->is_wholesale === 0 ? false : true;
            $product->is_digital = $product->is_digital === 0 ? false : true;
            $product->is_refundable = $product->is_refundable === 0 ? false : true;
            $product->todays_deal = $product->todays_deal === 0 ? false : true;
            $product->is_approved = $product->is_approved === 0 ? false : true;
            $product->is_catalog = $product->is_catalog === 0 ? false : true;

            $attribute_sets = [];
            foreach (json_decode($product->attribute_sets, true) as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                $attributes = ProductAttribute::where('product_id', $product->id)->where('attribute_id', $attribute_set_id)->get();
                $set_attributes = [];
                foreach ($attributes as $attribute) {
                    foreach (json_decode($product->cart_attributes, true) as $order_attribute) {
                        if ($order_attribute['attribute_id'] === $attribute->id && $order_attribute['attribute_set_id'] === $attribute_set_id) {
                            $attribute['is_selected'] = true;
                        }
                    }
                    array_push($set_attributes, $attribute);
                }
                $attribute_set['attributes'] = $set_attributes;

                foreach (json_decode($product->cart_attributes, true) as $cart_attribute) {
                    if ($cart_attribute['attribute_set_id'] === $attribute_set_id) {
                        $attribute_set['SelectedAttribute'] = ProductAttribute::where('id', $cart_attribute['attribute_id'])->first();
                    }
                }
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $product->coupon_discount = 0;

            $product['specifications'] = ProductSpecification::where('product_specifications.productId', $product->id)
                ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
                ->orderBy('product_specifications.id', 'desc')
                ->get(['product_specifications.*', 'specifications.title']);

            try {
                //$product->packaging_config = json_decode($product->packaging_config, true);
            } catch (\Exception $e) {
            }

            array_push($formatedProducts, $product);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $formatedProducts,
            'message' => 'OK'
        ), 200);
    }

    public function incrementCartProductQty(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $cart = Cart::where('user_id', $userId)
            ->where('id', $request->input('cart_id'))
            ->first();

        $cart->order_quantity = $cart->order_quantity += 1;
        $cart->update();

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function decrementCartProductQty(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $cart = Cart::where('user_id', $userId)
            ->where('id', $request->input('cart_id'))
            ->first();

        $product = Product::where('id', $request->input('product_id'))->first();
        if ($cart->order_quantity <= $product->minimum_order_quantity) {
            $cart->delete();

            return response()->json(array(
                'status' => 201,
                'message' => 'OK'
            ), 201);
        } else {
            $cart->order_quantity = $cart->order_quantity -= 1;
            $cart->update();

            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        }
    }

    public function loadCartPriceData()
    {
        $user = auth()->user();
        $userId = $user->id;
        $userCurrency = Currency::where("country_code", $user->country)->first();

        $products = Cart::where('carts.user_id', $userId)
            ->join('products', 'products.id', '=', 'carts.product_id')
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->join('addresses', 'carts.delivery_address_id', '=', 'addresses.id')
            ->join('states', 'carts.delivery_state_id', '=', 'states.id')
            ->join('cities', 'carts.delivery_city_id', '=', 'cities.id')
            ->join('countries', 'carts.delivery_country_id', '=', 'countries.id')
            ->join('delivery_companies', 'carts.delivery_company_id', '=', 'delivery_companies.id')

            ->orderBy('carts.created_at', 'desc')
            ->get([
                'products.*',
                'carts.order_quantity',
                'carts.attributes AS cart_attributes',
                'carts.id AS cart_id',
                'carts.delivery_cost',
                'carts.delivery_type',
                'carts.delivery_company_id',
                'carts.delivery_address_id',
                'carts.delivery_country_id',
                'carts.delivery_state_id',
                'carts.delivery_city_id',
                'carts.delivery_latitude',
                'carts.delivery_longitude',
                'carts.delivery_postal_code',
                'users.user_name',
                'states.name AS state',
                'countries.name AS country',
                'cities.name AS city',
                'delivery_companies.company_name', 'currencies.code AS currency'
            ]);

        $formatedProducts = [];

        $Subtotal = 0;
        $DiscountTotal = 0;
        $VatTaxTotal = 0;
        $TotalAmmountToPay = 0;
        $CouponDiscountTotal = 0;
        $SheepingFees = 0;

        foreach ($products as $product) {
            $converted_exchange_rate = 1;
            if ($product['currency'] !== $userCurrency->code) {
                $converted_exchange_rate = Currency::where('code', $product['currency'])
                    ->orderBy('id', 'desc')
                    ->selectRaw('*, ROUND(exchange_rate / ?, 6) as converted_exchange_rate', [$userCurrency->exchange_rate])
                    ->first()['converted_exchange_rate'];
            }

            $attribute_sets = [];
            foreach (json_decode($product->attribute_sets, true) as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                foreach (json_decode($product->cart_attributes, true) as $cart_attribute) {
                    if ($cart_attribute['attribute_set_id'] === $attribute_set_id) {
                        $selectedAttribute = ProductAttribute::where('id', $cart_attribute['attribute_id'])->first();
                        $attribute_set['SelectedAttribute'] = $selectedAttribute;
                    }
                }
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $addressFrom = Seller::where('sellers.user_id', $product->user_id)
                ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                ->join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->first([
                    'sellers.*',
                    'addresses.city_id',
                    'addresses.country_id',
                    'addresses.latitude',
                    'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city', 'addresses.id AS addr_id'
                ]);

            $addressTo = Address::join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->where('addresses.id', $product->delivery_address_id)
                ->where('addresses.user_id', $userId)
                ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);


            $deliveryQuotation = array();

            $packaging_config = json_decode($product->packaging_config, true);
            $actualWeight = $packaging_config['weight'];
            $length = $packaging_config['length'];
            $width = $packaging_config['width'];
            $height = $packaging_config['height'];
            $weight = $packaging_config['weight'];

            $cubic_area = $length * $width * $height;


            if ($product['delivery_type'] === 'seller') {
                $distance = round($this->distance($addressFrom->latitude, $addressFrom->longitude, $addressTo->latitude, $addressTo->longitude, "K"), 0, PHP_ROUND_HALF_UP);

                $dimensional_weight = $cubic_area / $addressFrom->dimensional_divisor;
                $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                if ($dimensional_weight > $actualWeight) {
                    $weight = $dimensional_weight;
                } else {
                    $weight = $actualWeight;
                }
                $deliveryQuotation = $addressFrom;
                $deliveryQuotation['deliveryTime'] = 'Seller';
                $deliveryQuotation['delivery_type'] = 'seller';
                $deliveryQuotation['distance'] = $distance;
                $deliveryQuotation['depature_city'] = $addressFrom->city;
                $deliveryQuotation['destination_city'] = $addressTo->city;
                $deliveryQuotation['company_name'] = $addressFrom->shop_name;

                $deliveryQuotation['depature_addr_id'] = $addressFrom->addr_id;
                $deliveryQuotation['delivery_address_id'] = $addressTo->id;

                $deliveryQuotation['weight'] = $weight;
                $deliveryQuotation['pkgDeliveryFee'] = ($addressFrom->express_delivery_fee * $deliveryQuotation['weight']) * $distance;
                $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $addressFrom->express_delivery_fee ? $addressFrom->express_delivery_fee : $deliveryQuotation['pkgDeliveryFee'];
            } else if ($product['delivery_type'] === 'route') {
                $deliveryQuotation = $this->loadDeliveryCompanyRoute($addressFrom->city_id, $addressTo->city_id, $product['delivery_company_id']);

                $dimensional_weight = $cubic_area / $deliveryQuotation->dimensional_divisor;
                $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                if ($dimensional_weight > $actualWeight) {
                    $weight = $dimensional_weight;
                } else {
                    $weight = $actualWeight;
                }

                $deliveryQuotation['deliveryTime'] = '1-3 Days';
                $deliveryQuotation['delivery_type'] = 'route';
                $deliveryQuotation['weight'] = $weight;
                $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation->deliveryFeePerKg * $deliveryQuotation['weight'];
                $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $deliveryQuotation->minDeliveryFee ? $deliveryQuotation->minDeliveryFee : $deliveryQuotation['pkgDeliveryFee'];
            } else if ($product['delivery_type'] === 'express') {
                $deliveryQuotation = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                    ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->where('delivery_companies.id', $product['delivery_company_id'])
                    ->where('addresses.deleted', 'false')
                    ->first([
                        'delivery_companies.*',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city'
                    ]);

                $distanceFromDeliveryCompanyToSeller = round($this->distance($deliveryQuotation->latitude, $deliveryQuotation->longitude, $addressFrom->latitude, $addressFrom->longitude, "K"), 0, PHP_ROUND_HALF_UP);
                $distanceFromSellerToCustomer = round($this->distance($addressFrom->latitude, $addressFrom->longitude, $addressTo->latitude, $addressTo->longitude, "K"), 0, PHP_ROUND_HALF_UP);

                $distance = $distanceFromDeliveryCompanyToSeller + $distanceFromSellerToCustomer;

                $dimensional_weight = $cubic_area / $deliveryQuotation->dimensional_divisor;
                $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                if ($dimensional_weight > $actualWeight) {
                    $weight = $dimensional_weight;
                } else {
                    $weight = $actualWeight;
                }

                $deliveryQuotation['deliveryTime'] = 'Express';
                $deliveryQuotation['delivery_type'] = 'express';
                $deliveryQuotation['distance'] = $distance;
                $deliveryQuotation['depature_city'] = $addressFrom->city;
                $deliveryQuotation['destination_city'] = $addressTo->city;

                $deliveryQuotation['depature_addr_id'] = $deliveryQuotation->address_id;
                $deliveryQuotation['delivery_address_id'] = $addressTo->id;

                $deliveryQuotation['weight'] = $weight;
                $deliveryQuotation['pkgDeliveryFee'] = ($deliveryQuotation->express_delivery_fee * $deliveryQuotation['weight']) * $distance;
                $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $deliveryQuotation->express_delivery_fee ? $deliveryQuotation->express_delivery_fee : $deliveryQuotation['pkgDeliveryFee'];
            }

            if (isset($deliveryQuotation)) {
                $SheepingFees +=  $deliveryQuotation['pkgDeliveryFee'] * $product->order_quantity;
            }


            // Get the current date and time
            $currentDate = Carbon::now();

            // Convert the special discount start and end dates from string to Carbon
            $specialDiscountStart = Carbon::parse($product->special_discount_start);
            $specialDiscountEnd = Carbon::parse($product->special_discount_end);

            // Check if the current date is within the discount period
            if ($currentDate->gte($specialDiscountStart) && $currentDate->lte($specialDiscountEnd)) {
                $additionalAttributePrice = 0;
                for ($i = 0; $i < sizeof($product->attribute_sets); $i++) {
                    $additionalAttributePrice += $product->attribute_sets[$i]['SelectedAttribute']['price'];
                }
                $priceToPay = (($product->special_discount + $additionalAttributePrice) * $product->order_quantity);
                $VatTaxTotal += (($priceToPay - ($product->purchase_cost * $product->order_quantity)) / 100) * 18;

                $Subtotal += (($product->price + $additionalAttributePrice) * $product->order_quantity);
                $DiscountTotal += (($product->price - $product->special_discount) * $product->order_quantity);
                $TotalAmmountToPay += $priceToPay;
            } else {
                $additionalAttributePrice = 0;
                for ($i = 0; $i < sizeof($product->attribute_sets); $i++) {
                    $additionalAttributePrice += $product->attribute_sets[$i]['SelectedAttribute']['price'];
                }
                $priceToPay = (($product->price + $additionalAttributePrice) * $product->order_quantity);
                $VatTaxTotal += (($priceToPay - ($product->purchase_cost * $product->order_quantity)) / 100) * 18;

                $Subtotal += (($product->price + $additionalAttributePrice) * $product->order_quantity);
                $TotalAmmountToPay += $priceToPay;
            }

            $Subtotal = $Subtotal * $converted_exchange_rate;
            $SheepingFees = $SheepingFees * $converted_exchange_rate;
            $VatTaxTotal = $VatTaxTotal * $converted_exchange_rate;
            $DiscountTotal = $DiscountTotal * $converted_exchange_rate;
            $TotalAmmountToPay = $TotalAmmountToPay * $converted_exchange_rate;

            try {
                //$product->packaging_config = json_decode($product->packaging_config, true);
            } catch (\Exception $e) {
            }

            array_push($formatedProducts, $product);
        }

        $products = Cart::where('carts.user_id', $userId)
            ->join('products', 'products.id', '=', 'carts.product_id')
            ->join('users', 'products.user_id', '=', 'users.id')
            ->groupBy('carts.product_id')
            ->orderByDesc(DB::raw('MAX(carts.created_at)'))
            ->get([
                'products.*',
                'users.user_name',
                DB::raw('MAX(carts.order_quantity) as order_quantity'),
                DB::raw('MAX(carts.attributes) as cart_attributes'),
                DB::raw('MAX(carts.id) as cart_id')
            ]);


        // Loop through the grouped products
        foreach ($products as $product) {
            // Additional logic for each group...
            $coupon_discount = 0;
            $CouponDiscountTotal += $coupon_discount;
        }

        $CouponDiscountTotal = $CouponDiscountTotal * $converted_exchange_rate;

        $billingAddress = Address::join('states', 'addresses.state_id', '=', 'states.id')
            ->join('cities', 'addresses.city_id', '=', 'cities.id')
            ->join('countries', 'addresses.country_id', '=', 'countries.id')
            ->orderBy('addresses.created_at', 'desc')
            ->where('addresses.user_id', $userId)
            ->where('addresses.default_billing', 1)
            ->where('addresses.deleted', 'false')
            ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);

        if (!isset($billingAddress)) {
            $billingAddress = Address::join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->orderBy('addresses.created_at', 'desc')
                ->where('addresses.user_id', $userId)
                ->where('addresses.deleted', 'false')
                ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);
        }

        return response()->json(array(
            'status' => 200,
            'data' => array(
                'Subtotal' => $Subtotal,
                'DiscountTotal' => $DiscountTotal,
                'VatTaxTotal' => $VatTaxTotal,
                'TotalAmmountToPay' => (($TotalAmmountToPay + $VatTaxTotal) - $CouponDiscountTotal) + $SheepingFees,
                'CouponDiscountTotal' => $CouponDiscountTotal,
                'SheepingFees' => $SheepingFees,
                'address' =>  $billingAddress,
                'currency' =>  $userCurrency->code
            ),
            'message' => 'OK'
        ), 200);
    }

    public function storeUserAddress(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $validator = Validator::make($request->all(), [
            'name'          => 'required',
            'email'         => 'required',
            'phone_no'      => 'required',
            'country_id'    => 'required',
            'state_id'      => 'required',
            'city_id'       => 'required',
            'postal_code'   => 'required',
            'address'       => 'required',
            'unit_apt'      => 'required',
            'latitude'      => 'required',
            'longitude'     => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }
        try {
            $address = new Address;
            $address->name = $request->input('name');
            $address->email = $request->input('email');
            $address->phone_no = $request->input('phone_no');
            $address->country_id = $request->input('country_id');
            $address->state_id = $request->input('state_id');
            $address->city_id = $request->input('city_id');
            $address->postal_code = $request->input('postal_code');
            $address->address = $request->input('address');
            $address->unit_apt = $request->input('unit_apt');
            $address->latitude = $request->input('latitude');
            $address->longitude = $request->input('longitude');
            $address->user_id = $userId;
            $address->save();

            return response()->json(array(
                'status' => 200,
                'message' => 'Address Created Successfully'
            ), 200);
        } catch (\Exception $e) {
            return response()->json(array(
                'status' => 400,
                'message' => 'Something Went Wrong',
                'data' => $e
            ), 400);
        }
    }

    public function fetchUserAddress()
    {
        $user = auth()->user();
        $userId = $user->id;

        $Addresses = Address::join('states', 'addresses.state_id', '=', 'states.id')
            ->join('cities', 'addresses.city_id', '=', 'cities.id')
            ->join('countries', 'addresses.country_id', '=', 'countries.id')
            ->orderBy('addresses.created_at', 'desc')
            ->where('addresses.user_id', $userId)
            ->where('addresses.deleted', 'false')
            ->get(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);

        $data = array(
            'status' => 200,
            'data' => $Addresses,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function deleteShippingAddresses($addressId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = Address::where('id', $addressId)
            ->update(['deleted' => 'true', 'deleterId' => $userId, 'deleteTime' => now()]);

        if ($data) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function updateInvoiceShippingAddress(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $validator = Validator::make($request->all(), [
            'addressId'         => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }

        if (!Address::where('id', $request->input('addressId'))->where('user_id', $userId)->where('deleted', 'false')->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Invalid Address ID was provided.'
            ), 500);
        }

        $data = Address::where('user_id', $userId)
            ->where('default_billing', true)
            ->update(['default_billing'  => false]);

        if ($data) {
            $data = Address::where('id', $request->input('addressId'))
                ->where('user_id', $userId)
                ->update(['default_billing'  => true]);

            if ($data) {
                return response()->json(array(
                    'status' => 200,
                    'data' => $this->loadCartAddressPriceData(),
                    'message' => 'Address Price Data'
                ), 200);
            } else {
                return response()->json(array(
                    'status' => 500,
                    'message' => 'Something Went Wrong',
                ), 500);
            }
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something Went Wrong',
            ), 500);
        }
    }

    public function loadCartAddressPriceData()
    {
        $user = auth()->user();
        $userId = $user->id;
        $userCurrency = Currency::where("country_code", $user->country)->first();

        $products = Cart::where('carts.user_id', $userId)
            ->join('products', 'products.id', '=', 'carts.product_id')
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->join('addresses', 'carts.delivery_address_id', '=', 'addresses.id')
            ->join('states', 'carts.delivery_state_id', '=', 'states.id')
            ->join('cities', 'carts.delivery_city_id', '=', 'cities.id')
            ->join('countries', 'carts.delivery_country_id', '=', 'countries.id')
            ->join('delivery_companies', 'carts.delivery_company_id', '=', 'delivery_companies.id')

            ->orderBy('carts.created_at', 'desc')
            ->get([
                'products.*',
                'carts.order_quantity',
                'carts.attributes AS cart_attributes',
                'carts.id AS cart_id',
                'carts.delivery_cost',
                'carts.delivery_type',
                'carts.delivery_company_id',
                'carts.delivery_address_id',
                'carts.delivery_country_id',
                'carts.delivery_state_id',
                'carts.delivery_city_id',
                'carts.delivery_latitude',
                'carts.delivery_longitude',
                'carts.delivery_postal_code',
                'users.user_name',
                'states.name AS state',
                'countries.name AS country',
                'cities.name AS city',
                'delivery_companies.company_name',
                'currencies.code AS currency'
            ]);

        $formatedProducts = [];

        $Subtotal = 0;
        $DiscountTotal = 0;
        $VatTaxTotal = 0;
        $TotalAmmountToPay = 0;
        $CouponDiscountTotal = 0;
        $SheepingFees = 0;

        foreach ($products as $product) {
            $converted_exchange_rate = 1;
            if ($product['currency'] !== $userCurrency->code) {
                $converted_exchange_rate = Currency::where('code', $product['currency'])
                    ->orderBy('id', 'desc')
                    ->selectRaw('*, ROUND(exchange_rate / ?, 6) as converted_exchange_rate', [$userCurrency->exchange_rate])
                    ->first()['converted_exchange_rate'];
            }

            $attribute_sets = [];
            foreach (json_decode($product->attribute_sets, true) as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                foreach (json_decode($product->cart_attributes, true) as $cart_attribute) {
                    if ($cart_attribute['attribute_set_id'] === $attribute_set_id) {
                        $selectedAttribute = ProductAttribute::where('id', $cart_attribute['attribute_id'])->first();
                        $attribute_set['SelectedAttribute'] = $selectedAttribute;
                    }
                }
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $addressFrom = Seller::where('sellers.user_id', $product->user_id)
                ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                ->join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->first([
                    'sellers.*',
                    'addresses.city_id',
                    'addresses.country_id',
                    'addresses.latitude',
                    'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city', 'addresses.id AS addr_id'
                ]);

            $addressTo = Address::join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->where('addresses.id', $product->delivery_address_id)
                ->where('addresses.user_id', $userId)
                ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);


            $deliveryQuotation = array();

            $packaging_config = json_decode($product->packaging_config, true);
            $actualWeight = $packaging_config['weight'];
            $length = $packaging_config['length'];
            $width = $packaging_config['width'];
            $height = $packaging_config['height'];
            $weight = $packaging_config['weight'];

            $cubic_area = $length * $width * $height;


            if ($product['delivery_type'] === 'seller') {
                $distance = round($this->distance($addressFrom->latitude, $addressFrom->longitude, $addressTo->latitude, $addressTo->longitude, "K"), 0, PHP_ROUND_HALF_UP);

                $dimensional_weight = $cubic_area / $addressFrom->dimensional_divisor;
                $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                if ($dimensional_weight > $actualWeight) {
                    $weight = $dimensional_weight;
                } else {
                    $weight = $actualWeight;
                }
                $deliveryQuotation = $addressFrom;
                $deliveryQuotation['deliveryTime'] = 'Seller';
                $deliveryQuotation['delivery_type'] = 'seller';
                $deliveryQuotation['distance'] = $distance;
                $deliveryQuotation['depature_city'] = $addressFrom->city;
                $deliveryQuotation['destination_city'] = $addressTo->city;
                $deliveryQuotation['company_name'] = $addressFrom->shop_name;

                $deliveryQuotation['depature_addr_id'] = $addressFrom->addr_id;
                $deliveryQuotation['delivery_address_id'] = $addressTo->id;

                $deliveryQuotation['weight'] = $weight;
                $deliveryQuotation['pkgDeliveryFee'] = ($addressFrom->express_delivery_fee * $deliveryQuotation['weight']) * $distance;
                $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $addressFrom->express_delivery_fee ? $addressFrom->express_delivery_fee : $deliveryQuotation['pkgDeliveryFee'];
            } else if ($product['delivery_type'] === 'route') {
                $deliveryQuotation = $this->loadDeliveryCompanyRoute($addressFrom->city_id, $addressTo->city_id, $product['delivery_company_id']);

                $dimensional_weight = $cubic_area / $deliveryQuotation->dimensional_divisor;
                $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                if ($dimensional_weight > $actualWeight) {
                    $weight = $dimensional_weight;
                } else {
                    $weight = $actualWeight;
                }

                $deliveryQuotation['deliveryTime'] = '1-3 Days';
                $deliveryQuotation['delivery_type'] = 'route';
                $deliveryQuotation['weight'] = $weight;
                $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation->deliveryFeePerKg * $deliveryQuotation['weight'];
                $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $deliveryQuotation->minDeliveryFee ? $deliveryQuotation->minDeliveryFee : $deliveryQuotation['pkgDeliveryFee'];
            } else if ($product['delivery_type'] === 'express') {
                $deliveryQuotation = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                    ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->where('delivery_companies.id', $product['delivery_company_id'])
                    ->where('addresses.deleted', 'false')
                    ->first([
                        'delivery_companies.*',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city'
                    ]);

                $distanceFromDeliveryCompanyToSeller = round($this->distance($deliveryQuotation->latitude, $deliveryQuotation->longitude, $addressFrom->latitude, $addressFrom->longitude, "K"), 0, PHP_ROUND_HALF_UP);
                $distanceFromSellerToCustomer = round($this->distance($addressFrom->latitude, $addressFrom->longitude, $addressTo->latitude, $addressTo->longitude, "K"), 0, PHP_ROUND_HALF_UP);

                $distance = $distanceFromDeliveryCompanyToSeller + $distanceFromSellerToCustomer;

                $dimensional_weight = $cubic_area / $deliveryQuotation->dimensional_divisor;
                $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                if ($dimensional_weight > $actualWeight) {
                    $weight = $dimensional_weight;
                } else {
                    $weight = $actualWeight;
                }

                $deliveryQuotation['deliveryTime'] = 'Express';
                $deliveryQuotation['delivery_type'] = 'express';
                $deliveryQuotation['distance'] = $distance;
                $deliveryQuotation['depature_city'] = $addressFrom->city;
                $deliveryQuotation['destination_city'] = $addressTo->city;

                $deliveryQuotation['depature_addr_id'] = $deliveryQuotation->address_id;
                $deliveryQuotation['delivery_address_id'] = $addressTo->id;

                $deliveryQuotation['weight'] = $weight;
                $deliveryQuotation['pkgDeliveryFee'] = ($deliveryQuotation->express_delivery_fee * $deliveryQuotation['weight']) * $distance;
                $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $deliveryQuotation->express_delivery_fee ? $deliveryQuotation->express_delivery_fee : $deliveryQuotation['pkgDeliveryFee'];
            }

            if (isset($deliveryQuotation)) {
                $SheepingFees +=  $deliveryQuotation['pkgDeliveryFee'] * $product->order_quantity;
            }


            // Get the current date and time
            $currentDate = Carbon::now();

            // Convert the special discount start and end dates from string to Carbon
            $specialDiscountStart = Carbon::parse($product->special_discount_start);
            $specialDiscountEnd = Carbon::parse($product->special_discount_end);

            // Check if the current date is within the discount period
            if ($currentDate->gte($specialDiscountStart) && $currentDate->lte($specialDiscountEnd)) {
                $additionalAttributePrice = 0;
                for ($i = 0; $i < sizeof($product->attribute_sets); $i++) {
                    $additionalAttributePrice += $product->attribute_sets[$i]['SelectedAttribute']['price'];
                }
                $priceToPay = (($product->special_discount + $additionalAttributePrice) * $product->order_quantity);
                $VatTaxTotal += (($priceToPay - ($product->purchase_cost * $product->order_quantity)) / 100) * 18;

                $Subtotal += (($product->price + $additionalAttributePrice) * $product->order_quantity);
                $DiscountTotal += (($product->price - $product->special_discount) * $product->order_quantity);
                $TotalAmmountToPay += $priceToPay;
            } else {
                $additionalAttributePrice = 0;
                for ($i = 0; $i < sizeof($product->attribute_sets); $i++) {
                    $additionalAttributePrice += $product->attribute_sets[$i]['SelectedAttribute']['price'];
                }
                $priceToPay = (($product->price + $additionalAttributePrice) * $product->order_quantity);
                $VatTaxTotal += (($priceToPay - ($product->purchase_cost * $product->order_quantity)) / 100) * 18;

                $Subtotal += (($product->price + $additionalAttributePrice) * $product->order_quantity);
                $TotalAmmountToPay += $priceToPay;
            }

            $Subtotal = $Subtotal * $converted_exchange_rate;
            $SheepingFees = $SheepingFees * $converted_exchange_rate;
            $VatTaxTotal = $VatTaxTotal * $converted_exchange_rate;
            $DiscountTotal = $DiscountTotal * $converted_exchange_rate;
            $TotalAmmountToPay = $TotalAmmountToPay * $converted_exchange_rate;

            try {
                //$product->packaging_config = json_decode($product->packaging_config, true);
            } catch (\Exception $e) {
            }

            array_push($formatedProducts, $product);
        }

        $products = Cart::where('carts.user_id', $userId)
            ->join('products', 'products.id', '=', 'carts.product_id')
            ->join('users', 'products.user_id', '=', 'users.id')
            ->groupBy('carts.product_id')
            ->orderByDesc(DB::raw('MAX(carts.created_at)'))
            ->get([
                'products.*',
                'users.user_name',
                DB::raw('MAX(carts.order_quantity) as order_quantity'),
                DB::raw('MAX(carts.attributes) as cart_attributes'),
                DB::raw('MAX(carts.id) as cart_id')
            ]);


        // Loop through the grouped products
        foreach ($products as $product) {
            // Additional logic for each group...
            $coupon_discount = 0;
            $CouponDiscountTotal += $coupon_discount;
        }

        $CouponDiscountTotal = $CouponDiscountTotal * $converted_exchange_rate;

        $billingAddress = Address::join('states', 'addresses.state_id', '=', 'states.id')
            ->join('cities', 'addresses.city_id', '=', 'cities.id')
            ->join('countries', 'addresses.country_id', '=', 'countries.id')
            ->orderBy('addresses.created_at', 'desc')
            ->where('addresses.user_id', $userId)
            ->where('addresses.default_billing', 1)
            ->where('addresses.deleted', 'false')
            ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);

        if (!isset($billingAddress)) {
            $billingAddress = Address::join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->orderBy('addresses.created_at', 'desc')
                ->where('addresses.user_id', $userId)
                ->where('addresses.deleted', 'false')
                ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);
        }

        return array(
            'Subtotal' => $Subtotal,
            'DiscountTotal' => $DiscountTotal,
            'VatTaxTotal' => $VatTaxTotal,
            'TotalAmmountToPay' => (($TotalAmmountToPay + $VatTaxTotal) - $CouponDiscountTotal) + $SheepingFees,
            'CouponDiscountTotal' => $CouponDiscountTotal,
            'SheepingFees' => $SheepingFees,
            'address' =>  $billingAddress,
            'currency' =>  $userCurrency->code
        );
    }

    public function createOrder(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $invoice_id = $this->get_uuid();

        $validator = Validator::make($request->all(), [
            'addressId'         => 'required',
            'payment_type'         => 'required',
            'payment_method'         => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }

        if (!Address::where('id', $request->input('addressId'))->where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Invalid Address was provided.'
            ), 500);
        }


        $products = Cart::where('carts.user_id', $userId)
            ->join('products', 'products.id', '=', 'carts.product_id')
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->join('addresses', 'carts.delivery_address_id', '=', 'addresses.id')
            ->join('states', 'carts.delivery_state_id', '=', 'states.id')
            ->join('cities', 'carts.delivery_city_id', '=', 'cities.id')
            ->join('countries', 'carts.delivery_country_id', '=', 'countries.id')
            ->join('delivery_companies', 'carts.delivery_company_id', '=', 'delivery_companies.id')

            ->orderBy('carts.created_at', 'desc')
            ->get([
                'products.*',
                'carts.order_quantity',
                'carts.attributes AS cart_attributes',
                'carts.id AS cart_id',
                'carts.delivery_cost',
                'carts.delivery_type',
                'carts.delivery_company_id',
                'carts.delivery_address_id',
                'carts.delivery_country_id',
                'carts.delivery_state_id',
                'carts.delivery_city_id',
                'carts.delivery_latitude',
                'carts.delivery_longitude',
                'carts.delivery_postal_code',
                'users.user_name',
                'states.name AS state',
                'countries.name AS country',
                'cities.name AS city',
                'delivery_companies.company_name', 'currencies.code AS currency'
            ]);

        foreach ($products as $product) {
            $Subtotal = 0;
            $DiscountTotal = 0;
            $VatTaxTotal = 0;
            $TotalAmmountToPay = 0;
            $CouponDiscountTotal = 0;
            $SheepingFees = 0;

            $attribute_sets = [];
            foreach (json_decode($product->attribute_sets, true) as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                foreach (json_decode($product->cart_attributes, true) as $cart_attribute) {
                    if ($cart_attribute['attribute_set_id'] === $attribute_set_id) {
                        $selectedAttribute = ProductAttribute::where('id', $cart_attribute['attribute_id'])->first();
                        $attribute_set['SelectedAttribute'] = $selectedAttribute;
                    }
                }
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $addressFrom = Seller::where('sellers.user_id', $product->user_id)
                ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                ->join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->first([
                    'sellers.*',
                    'addresses.city_id',
                    'addresses.country_id',
                    'addresses.latitude',
                    'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city', 'addresses.id AS addr_id'
                ]);

            $addressTo = Address::join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->where('addresses.id', $product->delivery_address_id)
                ->where('addresses.user_id', $userId)
                ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);


            $deliveryQuotation = array();

            $packaging_config = json_decode($product->packaging_config, true);
            $actualWeight = $packaging_config['weight'];
            $length = $packaging_config['length'];
            $width = $packaging_config['width'];
            $height = $packaging_config['height'];
            $weight = $packaging_config['weight'];

            $cubic_area = $length * $width * $height;


            if ($product['delivery_type'] === 'seller') {
                $distance = round($this->distance($addressFrom->latitude, $addressFrom->longitude, $addressTo->latitude, $addressTo->longitude, "K"), 0, PHP_ROUND_HALF_UP);

                $dimensional_weight = $cubic_area / $addressFrom->dimensional_divisor;
                $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                if ($dimensional_weight > $actualWeight) {
                    $weight = $dimensional_weight;
                } else {
                    $weight = $actualWeight;
                }
                $deliveryQuotation = $addressFrom;
                $deliveryQuotation['deliveryTime'] = 'Seller';
                $deliveryQuotation['delivery_type'] = 'seller';
                $deliveryQuotation['distance'] = $distance;
                $deliveryQuotation['depature_city'] = $addressFrom->city;
                $deliveryQuotation['destination_city'] = $addressTo->city;
                $deliveryQuotation['company_name'] = $addressFrom->shop_name;

                $deliveryQuotation['depature_addr_id'] = $addressFrom->addr_id;
                $deliveryQuotation['delivery_address_id'] = $addressTo->id;

                $deliveryQuotation['weight'] = $weight;
                $deliveryQuotation['pkgDeliveryFee'] = ($addressFrom->express_delivery_fee * $deliveryQuotation['weight']) * $distance;
                $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $addressFrom->express_delivery_fee ? $addressFrom->express_delivery_fee : $deliveryQuotation['pkgDeliveryFee'];
            } else if ($product['delivery_type'] === 'route') {
                $deliveryQuotation = $this->loadDeliveryCompanyRoute($addressFrom->city_id, $addressTo->city_id, $product['delivery_company_id']);

                $dimensional_weight = $cubic_area / $deliveryQuotation->dimensional_divisor;
                $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                if ($dimensional_weight > $actualWeight) {
                    $weight = $dimensional_weight;
                } else {
                    $weight = $actualWeight;
                }

                $deliveryQuotation['deliveryTime'] = '1-3 Days';
                $deliveryQuotation['delivery_type'] = 'route';
                $deliveryQuotation['weight'] = $weight;
                $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation->deliveryFeePerKg * $deliveryQuotation['weight'];
                $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $deliveryQuotation->minDeliveryFee ? $deliveryQuotation->minDeliveryFee : $deliveryQuotation['pkgDeliveryFee'];
            } else if ($product['delivery_type'] === 'express') {
                $deliveryQuotation = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                    ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->where('delivery_companies.id', $product['delivery_company_id'])
                    ->where('addresses.deleted', 'false')
                    ->first([
                        'delivery_companies.*',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city'
                    ]);

                $distanceFromDeliveryCompanyToSeller = round($this->distance($deliveryQuotation->latitude, $deliveryQuotation->longitude, $addressFrom->latitude, $addressFrom->longitude, "K"), 0, PHP_ROUND_HALF_UP);
                $distanceFromSellerToCustomer = round($this->distance($addressFrom->latitude, $addressFrom->longitude, $addressTo->latitude, $addressTo->longitude, "K"), 0, PHP_ROUND_HALF_UP);

                $distance = $distanceFromDeliveryCompanyToSeller + $distanceFromSellerToCustomer;

                $dimensional_weight = $cubic_area / $deliveryQuotation->dimensional_divisor;
                $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                if ($dimensional_weight > $actualWeight) {
                    $weight = $dimensional_weight;
                } else {
                    $weight = $actualWeight;
                }

                $deliveryQuotation['deliveryTime'] = 'Express';
                $deliveryQuotation['delivery_type'] = 'express';
                $deliveryQuotation['distance'] = $distance;
                $deliveryQuotation['depature_city'] = $addressFrom->city;
                $deliveryQuotation['destination_city'] = $addressTo->city;

                $deliveryQuotation['depature_addr_id'] = $deliveryQuotation->address_id;
                $deliveryQuotation['delivery_address_id'] = $addressTo->id;

                $deliveryQuotation['weight'] = $weight;
                $deliveryQuotation['pkgDeliveryFee'] = ($deliveryQuotation->express_delivery_fee * $deliveryQuotation['weight']) * $distance;
                $deliveryQuotation['pkgDeliveryFee'] = $deliveryQuotation['pkgDeliveryFee'] < $deliveryQuotation->express_delivery_fee ? $deliveryQuotation->express_delivery_fee : $deliveryQuotation['pkgDeliveryFee'];
            }

            $SheepingFees +=  $deliveryQuotation['pkgDeliveryFee'] * $product->order_quantity;


            // Get the current date and time
            $currentDate = Carbon::now();

            // Convert the special discount start and end dates from string to Carbon
            $specialDiscountStart = Carbon::parse($product->special_discount_start);
            $specialDiscountEnd = Carbon::parse($product->special_discount_end);

            // Check if the current date is within the discount period
            if ($currentDate->gte($specialDiscountStart) && $currentDate->lte($specialDiscountEnd)) {
                $additionalAttributePrice = 0;
                for ($i = 0; $i < sizeof($product->attribute_sets); $i++) {
                    $additionalAttributePrice += $product->attribute_sets[$i]['SelectedAttribute']['price'];
                }
                $TotalAmmountToPay = (($product->special_discount + $additionalAttributePrice) * $product->order_quantity);
                $VatTaxTotal = (($TotalAmmountToPay - ($product->purchase_cost * $product->order_quantity)) / 100) * 18;

                $Subtotal += (($product->price + $additionalAttributePrice) * $product->order_quantity);
                $DiscountTotal += (($product->price - $product->special_discount) * $product->order_quantity);
            } else {
                $additionalAttributePrice = 0;
                for ($i = 0; $i < sizeof($product->attribute_sets); $i++) {
                    $additionalAttributePrice += $product->attribute_sets[$i]['SelectedAttribute']['price'];
                }
                $TotalAmmountToPay = (($product->price + $additionalAttributePrice) * $product->order_quantity);
                $VatTaxTotal = (($TotalAmmountToPay - ($product->purchase_cost * $product->order_quantity)) / 100) * 18;

                $Subtotal += (($product->price + $additionalAttributePrice) * $product->order_quantity);
            }

            $orderItem = new OrderItem;
            $orderItem->user_id = $userId;
            $orderItem->invoice_id = $invoice_id;
            $orderItem->product_id = $product->id;
            $orderItem->order_quantity = $product->order_quantity;
            $orderItem->attributes = $product->cart_attributes;

            $orderItem->price = $TotalAmmountToPay;
            $orderItem->tax = $VatTaxTotal;
            $orderItem->discount = $DiscountTotal;
            $orderItem->coupon_discount = $CouponDiscountTotal;

            $orderItem->delivery_cost = $SheepingFees;
            $orderItem->delivery_type = $product['delivery_type'];
            $orderItem->deliveryTime = $product['delivery_type'] == 'route' ? '1-3 Days' : ($product['delivery_type'] == 'seller' ? 'Seller'  : ($product['delivery_type'] == 'express' ? 'Express' : '10-60 Days'));
            $orderItem->delivery_company_id  = $product['delivery_company_id'];

            $orderItem->delivery_address = $addressTo->address;
            $orderItem->delivery_address_id = $product['delivery_address_id'];
            $orderItem->delivery_country_id = $addressTo->country_id;
            $orderItem->delivery_state_id = $addressTo->state_id;
            $orderItem->delivery_city_id = $addressTo->city_id;
            $orderItem->delivery_latitude = $addressTo->latitude;
            $orderItem->delivery_longitude = $addressTo->longitude;
            $orderItem->delivery_postal_code = $addressTo->postal_code;
            $orderItem->save();
        }

        $priceData = $this->loadCartAddressPriceData();

        $order = new Order;
        $order->invoice_id = $invoice_id;
        $order->billing_address = $request->input('addressId');
        $order->shipping_address = $request->input('addressId');
        $order->payment_type = $request->input('payment_type');
        $order->payment_method = $request->input('payment_method');
        $order->mobilemoney_phone = $request->input('mobilemoney_phone');

        $order->sub_total = $priceData['Subtotal'];
        $order->discount = $priceData['DiscountTotal'];
        $order->coupon_discount = $priceData['CouponDiscountTotal'];
        $order->total_tax = $priceData['VatTaxTotal'];
        $order->total_amount = $priceData['TotalAmmountToPay'];
        $order->shipping_cost = $priceData['SheepingFees'];
        $order->total_payable = $priceData['TotalAmmountToPay'];

        $order->user_id = $userId;
        $order->save();

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function fetchOrderHistory()
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = OrderItem::where('order_items.user_id', $userId)
            ->join('orders', 'orders.invoice_id', '=', 'order_items.invoice_id')
            ->join('users', 'orders.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->join('addresses', 'orders.billing_address', '=', 'addresses.id')
            ->groupBy('order_items.invoice_id')
            ->orderByDesc(DB::raw('MAX(order_items.created_at)'))
            ->get([
                'orders.*',
                'users.user_name',
                DB::raw('MAX(addresses.address) AS billing_address_label'),
                DB::raw('MAX(currencies.code) AS currency'),
                DB::raw('SUM(order_items.order_quantity) as order_quantity'),
            ]);

        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function fetchPendingOrders()
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = OrderItem::where('order_items.user_id', $userId)
            ->join('orders', 'orders.invoice_id', '=', 'order_items.invoice_id')
            ->join('users', 'orders.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->join('addresses', 'orders.billing_address', '=', 'addresses.id')
            ->groupBy('order_items.invoice_id')
            ->orderByDesc(DB::raw('MAX(order_items.created_at)'))
            ->get([
                'orders.*',
                'users.user_name',
                DB::raw('MAX(addresses.address) AS billing_address_label'),
                DB::raw('MAX(currencies.code) AS currency'),
                DB::raw('SUM(order_items.order_quantity) as order_quantity'),
            ]);

        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function fetchUserOrderItems($invoice_id)
    {
        $user = auth()->user();
        $userId = $user->id;

        $products = OrderItem::where('order_items.user_id', $userId)
            ->where('order_items.invoice_id', $invoice_id)
            ->join('products', 'products.id', '=', 'order_items.product_id')
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->join('addresses', 'order_items.delivery_address_id', '=', 'addresses.id')
            ->join('states', 'order_items.delivery_state_id', '=', 'states.id')
            ->join('cities', 'order_items.delivery_city_id', '=', 'cities.id')
            ->join('countries', 'order_items.delivery_country_id', '=', 'countries.id')

            ->orderBy('order_items.created_at', 'desc')

            ->get([
                'products.*',
                'order_items.order_quantity',
                'order_items.attributes AS order_attributes',
                'order_items.id AS cart_id',
                'order_items.delivery_cost',
                'order_items.deliveryTime',
                'order_items.delivery_type',
                'order_items.delivery_company_id',
                'order_items.delivery_address_id',
                'order_items.delivery_country_id',
                'order_items.delivery_state_id',
                'order_items.delivery_city_id',
                'order_items.delivery_latitude',
                'order_items.delivery_longitude',
                'order_items.delivery_postal_code',
                'order_items.invoice_id',
                'users.user_name',
                'states.name AS state',
                'countries.name AS country',
                'cities.name AS city',
                'currencies.code AS currency',

                'order_items.variation AS order_variation',
                'order_items.price AS order_price',
                'order_items.tax AS order_tax',
                'order_items.discount AS order_discount',
                'order_items.coupon_discount AS order_coupon_discount',
                'order_items.product_referral_code AS order_product_referral_code',
            ]);

        $formatedProducts = [];
        foreach ($products as $product) {
            $images = [];

            foreach (json_decode($product->images, true) as $image) {
                $image['url'] = getFileLink(@$image);
                array_push($images, $image);
            }
            $product->images = $images;
            $product->has_variant = $product->has_variant === 0 ? false : true;
            $product->stock_notification = $product->stock_notification === 0 ? false : true;
            $product->is_featured = $product->is_featured === 0 ? false : true;
            $product->is_featured_on_seller = $product->is_featured_on_seller === 0 ? false : true;
            $product->is_classified = $product->is_classified === 0 ? false : true;
            $product->is_wholesale = $product->is_wholesale === 0 ? false : true;
            $product->is_digital = $product->is_digital === 0 ? false : true;
            $product->is_refundable = $product->is_refundable === 0 ? false : true;
            $product->todays_deal = $product->todays_deal === 0 ? false : true;
            $product->is_approved = $product->is_approved === 0 ? false : true;
            $product->is_catalog = $product->is_catalog === 0 ? false : true;

            $product['order_full_price'] = $product->order_price + $product->order_discount;

            $attribute_sets = [];
            foreach (json_decode($product->attribute_sets, true) as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                $attributes = ProductAttribute::where('product_id', $product->id)->where('attribute_id', $attribute_set_id)->get();
                $set_attributes = [];
                foreach ($attributes as $attribute) {
                    foreach (json_decode($product->order_attributes, true) as $order_attribute) {
                        if ($order_attribute['attribute_id'] === $attribute->id && $order_attribute['attribute_set_id'] === $attribute_set_id) {
                            $attribute['is_selected'] = true;
                        }
                    }
                    array_push($set_attributes, $attribute);
                }
                $attribute_set['attributes'] = $set_attributes;

                foreach (json_decode($product->order_attributes, true) as $order_attribute) {
                    if ($order_attribute['attribute_set_id'] === $attribute_set_id) {
                        $attribute_set['SelectedAttribute'] = ProductAttribute::where('id', $order_attribute['attribute_id'])->first();
                    }
                }
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $product->coupon_discount = 0;

            $product['specifications'] = ProductSpecification::where('product_specifications.productId', $product->id)
                ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
                ->orderBy('product_specifications.id', 'desc')
                ->get(['product_specifications.*', 'specifications.title']);


            if ($product->delivery_type === 'route' || $product->delivery_type === 'express') {
                $delivery_company = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                    ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->where('delivery_companies.id', $product['delivery_company_id'])
                    ->where('addresses.deleted', 'false')
                    ->first([
                        'delivery_companies.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state',
                        'countries.name AS country',
                        'cities.name AS city'
                    ]);

                $product['delivery_company_name'] = $delivery_company->company_name;
                $product['delivery_company_address'] = $delivery_company['address'];
                $product['delivery_company_state'] = $delivery_company['state'];
                $product['delivery_company_country'] = $delivery_company['country'];
                $product['delivery_company_city'] = $delivery_company['city'];
            } else if ($product->delivery_type === 'seller') {
                $delivery_company = Seller::where('sellers.id', $product['delivery_company_id'])
                    ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->first([
                        'sellers.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state', 'countries.name AS country', 'cities.name AS city', 'addresses.id AS addr_id'
                    ]);

                $product['delivery_company_name'] = $delivery_company->shop_name;
                $product['delivery_company_address'] = $delivery_company['address'];
                $product['delivery_company_state'] = $delivery_company['state'];
                $product['delivery_company_country'] = $delivery_company['country'];
                $product['delivery_company_city'] = $delivery_company['city'];
            }

            try {
                $product->packaging_config = json_decode($product->packaging_config, true);
            } catch (\Exception $e) {
            }

            array_push($formatedProducts, $product);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $formatedProducts,
            'message' => 'OK'
        ), 200);
    }

    public function fetchSellerOrderHistory()
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = OrderItem::join('orders', 'orders.invoice_id', '=', 'order_items.invoice_id')
            ->join('products', 'products.id', '=', 'order_items.product_id')
            ->join('users', 'orders.user_id', '=', 'users.id')
            ->where('products.user_id', $userId)
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->join('addresses', 'orders.billing_address', '=', 'addresses.id')
            ->groupBy('order_items.invoice_id')
            ->orderByDesc(DB::raw('MAX(order_items.created_at)'))
            ->get([
                'orders.*',
                'users.user_name',
                DB::raw('MAX(addresses.address) AS billing_address_label'),
                DB::raw('MAX(currencies.code) AS currency'),
                DB::raw('SUM(order_items.order_quantity) as order_quantity'),
            ]);


        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function fetchSellerPendingOrders()
    {
        $user = auth()->user();
        $userId = $user->id;

        $result = OrderItem::join('orders', 'orders.invoice_id', '=', 'order_items.invoice_id')
            ->join('products', 'products.id', '=', 'order_items.product_id')
            ->join('users', 'orders.user_id', '=', 'users.id')
            ->where('products.user_id', $userId)
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->join('addresses', 'orders.billing_address', '=', 'addresses.id')
            ->groupBy('order_items.invoice_id')
            ->orderByDesc(DB::raw('MAX(order_items.created_at)'))
            ->get([
                'orders.*',
                'users.user_name',
                DB::raw('MAX(addresses.address) AS billing_address_label'),
                DB::raw('MAX(currencies.code) AS currency'),
                DB::raw('SUM(order_items.order_quantity) as order_quantity'),
            ]);

        $data = array(
            'status' => 200,
            'data' => $result,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function fetchSellerOrderItems($invoice_id)
    {
        $user = auth()->user();
        $userId = $user->id;

        $formatedProducts = $this->loadSellerInvoiceOrderItems($invoice_id, $userId);

        return response()->json(array(
            'status' => 200,
            'data' => $formatedProducts,
            'message' => 'OK'
        ), 200);
    }

    private function loadSellerInvoiceOrderItems($invoice_id, $userId)
    {
        $products = OrderItem::where('order_items.invoice_id', $invoice_id)
            ->join('products', 'products.id', '=', 'order_items.product_id')
            ->where('products.user_id', $userId)
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->join('addresses', 'order_items.delivery_address_id', '=', 'addresses.id')
            ->join('states', 'order_items.delivery_state_id', '=', 'states.id')
            ->join('cities', 'order_items.delivery_city_id', '=', 'cities.id')
            ->join('countries', 'order_items.delivery_country_id', '=', 'countries.id')


            ->join('orders', 'order_items.invoice_id', '=', 'orders.invoice_id')

            ->orderBy('order_items.created_at', 'desc')

            ->get([
                'products.*',
                'order_items.order_quantity',
                'order_items.attributes AS order_attributes',
                'order_items.id AS cart_id',
                'order_items.delivery_cost',
                'order_items.deliveryTime',
                'order_items.delivery_type',
                'order_items.delivery_company_id',
                'order_items.delivery_address_id',
                'orders.billing_address AS billing_address_id',
                'order_items.delivery_country_id',
                'order_items.delivery_state_id',
                'order_items.delivery_city_id',
                'order_items.delivery_latitude',
                'order_items.delivery_longitude',
                'order_items.delivery_postal_code',
                'order_items.invoice_id',
                'users.user_name',
                'states.name AS state',
                'countries.name AS country',
                'cities.name AS city',
                'currencies.code AS currency',

                'order_items.variation AS order_variation',
                'order_items.price AS order_price',
                'order_items.tax AS order_tax',
                'order_items.discount AS order_discount',
                'order_items.coupon_discount AS order_coupon_discount',
                'order_items.product_referral_code AS order_product_referral_code',
            ]);

        $formatedProducts = [];
        foreach ($products as $product) {
            $images = [];

            foreach (json_decode($product->images, true) as $image) {
                $image['url'] = getFileLink(@$image);
                array_push($images, $image);
            }
            $product->images = $images;
            $product->has_variant = $product->has_variant === 0 ? false : true;
            $product->stock_notification = $product->stock_notification === 0 ? false : true;
            $product->is_featured = $product->is_featured === 0 ? false : true;
            $product->is_featured_on_seller = $product->is_featured_on_seller === 0 ? false : true;
            $product->is_classified = $product->is_classified === 0 ? false : true;
            $product->is_wholesale = $product->is_wholesale === 0 ? false : true;
            $product->is_digital = $product->is_digital === 0 ? false : true;
            $product->is_refundable = $product->is_refundable === 0 ? false : true;
            $product->todays_deal = $product->todays_deal === 0 ? false : true;
            $product->is_approved = $product->is_approved === 0 ? false : true;
            $product->is_catalog = $product->is_catalog === 0 ? false : true;

            $product['order_full_price'] = $product->order_price + $product->order_discount;

            $attribute_sets = [];
            foreach (json_decode($product->attribute_sets, true) as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                $attributes = ProductAttribute::where('product_id', $product->id)->where('attribute_id', $attribute_set_id)->get();
                $set_attributes = [];
                foreach ($attributes as $attribute) {
                    foreach (json_decode($product->order_attributes, true) as $order_attribute) {
                        if ($order_attribute['attribute_id'] === $attribute->id && $order_attribute['attribute_set_id'] === $attribute_set_id) {
                            $attribute['is_selected'] = true;
                        }
                    }
                    array_push($set_attributes, $attribute);
                }
                $attribute_set['attributes'] = $set_attributes;

                foreach (json_decode($product->order_attributes, true) as $order_attribute) {
                    if ($order_attribute['attribute_set_id'] === $attribute_set_id) {
                        $attribute_set['SelectedAttribute'] = ProductAttribute::where('id', $order_attribute['attribute_id'])->first();
                    }
                }
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $product->coupon_discount = 0;

            $product['specifications'] = ProductSpecification::where('product_specifications.productId', $product->id)
                ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
                ->orderBy('product_specifications.id', 'desc')
                ->get(['product_specifications.*', 'specifications.title']);


            if ($product->delivery_type === 'route' || $product->delivery_type === 'express') {
                $delivery_company = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                    ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->where('delivery_companies.id', $product['delivery_company_id'])
                    ->where('addresses.deleted', 'false')
                    ->first([
                        'delivery_companies.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state',
                        'countries.name AS country',
                        'cities.name AS city'
                    ]);

                $product['delivery_company_name'] = $delivery_company->company_name;
                $product['delivery_company_address'] = $delivery_company['address'];
                $product['delivery_company_state'] = $delivery_company['state'];
                $product['delivery_company_country'] = $delivery_company['country'];
                $product['delivery_company_city'] = $delivery_company['city'];
            } else if ($product->delivery_type === 'seller') {
                $delivery_company = Seller::where('sellers.id', $product['delivery_company_id'])
                    ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->first([
                        'sellers.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state', 'countries.name AS country', 'cities.name AS city', 'addresses.id AS addr_id'
                    ]);

                $product['delivery_company_name'] = $delivery_company->shop_name;
                $product['delivery_company_address'] = $delivery_company['address'];
                $product['delivery_company_state'] = $delivery_company['state'];
                $product['delivery_company_country'] = $delivery_company['country'];
                $product['delivery_company_city'] = $delivery_company['city'];
            }

            try {
                $product->packaging_config = json_decode($product->packaging_config, true);
            } catch (\Exception $e) {
            }

            array_push($formatedProducts, $product);
        }

        return $formatedProducts;
    }

    public function createSellerAccount(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $validator = Validator::make($request->all(), [
            'shop_name'         => 'required',
            'address_id'         => 'required',
            'shop_description'         => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }

        if (Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'A user can only have one seller account.'
            ), 500);
        }

        if (!Address::where('id', $request->input('address_id'))->where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Invalid Address was provided.'
            ), 500);
        }

        $slug = lcfirst(preg_replace('/[.,\s]/', '_', $request->input('shop_name')));
        $i = 0;
        while (Seller::where('slug', $slug)->exists()) {
            $i++;
            $slug = $slug . $i;
        }

        $seller = new Seller;
        $seller->user_id = $userId;
        $seller->shop_name = $request->input('shop_name');
        $seller->address_id = $request->input('address_id');
        $seller->slug = $slug;
        $seller->shop_description = $request->input('shop_description');
        $seller->save();

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function loadMySellerAccount()
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'No seller account was discoverd.'
            ), 401);
        }

        return response()->json(array(
            'status' => 200,
            'data' => Seller::where('sellers.user_id', $userId)
                ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                ->join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->first([
                    'sellers.*',
                    'addresses.address', 'states.name AS state', 'countries.name AS country', 'cities.name AS city'
                ]),
            'message' => 'OK'
        ), 200);
    }

    public function loadSellerAccountInfo($seller_id)
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!Seller::where('user_id', $seller_id)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'No seller account was discoverd.'
            ), 401);
        }

        return response()->json(array(
            'status' => 200,
            'data' => Seller::where('sellers.user_id', $seller_id)
                ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                ->join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->first([
                    'sellers.*',
                    'addresses.address', 'states.name AS state', 'countries.name AS country', 'cities.name AS city'
                ]),
            'message' => 'OK'
        ), 200);
    }

    public function updateShopIcon(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $fileId = $request->input('fileId');

        if (!File::where('user_id', $userId)->where('id', $fileId)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'File was not discoverd.'
            ), 401);
        }

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Seller account was not discoverd.'
            ), 500);
        }

        Seller::where('user_id', $userId)
            ->update(['logo' => getFileLink(File::where('user_id', $userId)->where('id', $fileId)->first()), 'logo_id' => $fileId]);

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function updateShopValue(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $columnKey = $request->input('columnKey');
        $columnValue = $request->input('columnValue');

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Seller account was not discoverd.'
            ), 500);
        }

        Seller::where('user_id', $userId)
            ->update([$columnKey  => $columnValue]);

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function updateShopIdentificationValue(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $IDNumber = $request->input('IDNumber');
        $fileId = $request->input('fileId');

        if (!File::where('user_id', $userId)->where('id', $fileId)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'File was not discoverd.'
            ), 401);
        }

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Seller account was not discoverd.'
            ), 500);
        }

        Seller::where('user_id', $userId)
            ->update(['nin'  => $IDNumber, 'national_id_file_id'  => $fileId, 'national_id' => getFileLink(File::where('user_id', $userId)->where('id', $fileId)->first())]);

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }


    public function submitProductUpdates(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        Product::where('id', $request->input('productId'))
            ->update([
                'brand_id'  => $request->input('brandId'),
                'category_id'  => $request->input('categoryId'),
                'current_stock' => $request->input('current_stock'),
                'name' => $request->input('name'),
                'short_description' => $request->input('short_description'),
                'description' => $request->input('description'),
                'price' => $request->input('price'),
                'special_discount' => $request->input('special_discount'),
                'special_discount_start' => $request->input('special_discount_start'),
                'special_discount_end' => $request->input('special_discount_end'),
                'purchase_cost' => $request->input('purchase_cost'),
                'minimum_order_quantity' => $request->input('minimum_order_quantity'),
                'low_stock_to_notify' => $request->input('low_stock_to_notify'),
            ]);

        return response()->json(array(
            'message' => 'OK',
            'status' => 200
        ), 200);
    }


    public function updateProductPackagingConfig(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        Product::where('id', $request->input('productId'))
            ->update([
                'packaging_config'  => array(
                    'length' => $request->input('length'),
                    'width' => $request->input('width'),
                    'height' => $request->input('height'),
                    'weight' => $request->input('weight')
                )
            ]);

        return response()->json(array(
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function submitPackageType(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $packageType = new PackageType;
        $packageType->userId = $userId;
        $packageType->package_type = $request->input('package_type');
        $packageType->name = $request->input('name');
        $packageType->length = $request->input('length');
        $packageType->width = $request->input('width');
        $packageType->height = $request->input('height');
        $packageType->quantity = $request->input('quantity');
        $packageType->weight = $request->input('weight');
        $packageType->save();

        return response()->json(array(
            'data' => $packageType,
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function loadPackageTypes()
    {
        $data = PackageType::orderBy('id', 'desc')->get();

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function deletePackageType($packageTypeId)
    {

        $data = PackageType::where('id', $packageTypeId)->delete();

        if ($data) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function submitDeliveryCompany(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $validator = Validator::make($request->all(), [
            'company_name'         => 'required',
            'address_id'         => 'required',
            'company_description'         => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }

        if (DeliveryCompany::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'A user can only have one Delivery Company.'
            ), 500);
        }

        if (!Address::where('id', $request->input('address_id'))->where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Invalid Address was provided.'
            ), 500);
        }

        $slug = lcfirst(preg_replace('/[.,\s]/', '_', $request->input('company_name')));
        $i = 0;
        while (DeliveryCompany::where('slug', $slug)->exists()) {
            $i++;
            $slug = $slug . $i;
        }

        $deliveryCompany = new DeliveryCompany;
        $deliveryCompany->user_id = $userId;
        $deliveryCompany->company_name = $request->input('company_name');
        $deliveryCompany->address_id = $request->input('address_id');
        $deliveryCompany->slug = $slug;
        $deliveryCompany->company_description = $request->input('company_description');
        $deliveryCompany->save();

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function loadMyDeliveryCompany()
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!DeliveryCompany::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'No Delivery Company was discoverd.'
            ), 401);
        }

        return response()->json(array(
            'status' => 200,
            'data' => DeliveryCompany::where('delivery_companies.user_id', $userId)
                ->join('users', 'delivery_companies.user_id', '=', 'users.id')
                ->join('currencies', 'users.country', '=', 'currencies.country_code')
                ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                ->join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->first([
                    'delivery_companies.*',
                    'addresses.address', 'states.name AS state', 'countries.name AS country', 'cities.name AS city',
                    'currencies.code AS currency',
                ]),
            'message' => 'OK'
        ), 200);
    }

    public function loadDeliveryCompanyDetails($delivery_company_id)
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!DeliveryCompany::where('id', $delivery_company_id)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'No Delivery Company was discoverd.'
            ), 401);
        }

        $delivery_company = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
            ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
            ->join('states', 'addresses.state_id', '=', 'states.id')
            ->join('cities', 'addresses.city_id', '=', 'cities.id')
            ->join('countries', 'addresses.country_id', '=', 'countries.id')
            ->where('delivery_companies.id', $delivery_company_id)
            ->where('addresses.deleted', 'false')
            ->first([
                'delivery_companies.*',
                'addresses.city_id',
                'addresses.country_id',
                'addresses.latitude',
                'addresses.address',
                'addresses.longitude', 'states.name AS state', 'countries.name AS country', 'cities.name AS city'
            ]);

        return response()->json(array(
            'status' => 200,
            'data' => $delivery_company,
            'message' => 'OK'
        ), 200);
    }

    public function updateDeliveryCompanyIcon(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $fileId = $request->input('fileId');

        if (!File::where('user_id', $userId)->where('id', $fileId)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'File was not discoverd.'
            ), 401);
        }

        if (!DeliveryCompany::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Delivery Company was not discoverd.'
            ), 500);
        }

        DeliveryCompany::where('user_id', $userId)
            ->update(['logo' => getFileLink(File::where('user_id', $userId)->where('id', $fileId)->first()), 'logo_id' => $fileId]);

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function updateDeliveryCompanyValue(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $columnKey = $request->input('columnKey');
        $columnValue = $request->input('columnValue');

        if (!DeliveryCompany::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Delivery Company was not discoverd.'
            ), 500);
        }

        DeliveryCompany::where('user_id', $userId)
            ->update([$columnKey  => $columnValue]);

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function updateDeliveryCompanyIdentificationValue(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $IDNumber = $request->input('IDNumber');
        $fileId = $request->input('fileId');

        if (!File::where('user_id', $userId)->where('id', $fileId)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'File was not discoverd.'
            ), 401);
        }

        if (!DeliveryCompany::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Delivery Company was not discoverd.'
            ), 500);
        }

        DeliveryCompany::where('user_id', $userId)
            ->update(['nin'  => $IDNumber, 'national_id_file_id'  => $fileId, 'national_id' => getFileLink(File::where('user_id', $userId)->where('id', $fileId)->first())]);

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function fetchDeliveryQuotations(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'packageTypes'         => 'required',
            'shippingDate'         => 'required',
            'addressFromId'        => 'required',
            'addressToId'          => 'required',
            'deliveryContents'     => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }

        $addressFrom = Address::join('states', 'addresses.state_id', '=', 'states.id')
            ->join('cities', 'addresses.city_id', '=', 'cities.id')
            ->join('countries', 'addresses.country_id', '=', 'countries.id')
            ->orderBy('addresses.created_at', 'desc')
            ->where('addresses.id', $request->input('addressFromId'))
            ->where('addresses.deleted', 'false')
            ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);

        $addressTo = Address::join('states', 'addresses.state_id', '=', 'states.id')
            ->join('cities', 'addresses.city_id', '=', 'cities.id')
            ->join('countries', 'addresses.country_id', '=', 'countries.id')
            ->orderBy('addresses.created_at', 'desc')
            ->where('addresses.id', $request->input('addressToId'))
            ->where('addresses.deleted', 'false')
            ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);

        $delivery_companies = CompanyDeliveryRoute::join('company_delivery_points AS depature', 'company_delivery_routes.depature_addr_id', '=', 'depature.id')
            ->join('company_delivery_points AS destination', 'company_delivery_routes.destination_addr_id', '=', 'destination.id')

            ->join('states AS depature_state', 'depature.state_id', '=', 'depature_state.id')
            ->join('cities AS depature_city', 'depature.city_id', '=', 'depature_city.id')
            ->join('countries AS depature_country', 'depature.country_id', '=', 'depature_country.id')

            ->join('states AS destination_state', 'destination.state_id', '=', 'destination_state.id')
            ->join('cities AS destination_city', 'destination.city_id', '=', 'destination_city.id')
            ->join('countries AS destination_country', 'destination.country_id', '=', 'destination_country.id')

            ->join('delivery_companies', 'company_delivery_routes.company_id', '=', 'delivery_companies.id')
            ->join('addresses AS companyAddress', 'delivery_companies.address_id', '=', 'companyAddress.id')
            ->join('states AS companyStates', 'companyAddress.state_id', '=', 'companyStates.id')
            ->join('cities AS companyCities', 'companyAddress.city_id', '=', 'companyCities.id')
            ->join('countries AS companyCountries', 'companyAddress.country_id', '=', 'companyCountries.id')

            ->join('users', 'delivery_companies.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->orderBy('company_delivery_routes.created_at', 'desc')
            ->where('depature.city_id', $addressFrom->city_id)
            ->where('destination.city_id', $addressTo->city_id)
            ->where('company_delivery_routes.deleted', 'false')
            ->get([
                'delivery_companies.*',
                'company_delivery_routes.depature_addr_id',
                'company_delivery_routes.destination_addr_id',
                'company_delivery_routes.deliveryFeePerKg',
                'company_delivery_routes.minDeliveryFee',

                'depature_state.name AS depature_state', 'depature_country.name AS depature_country', 'depature_city.name AS depature_city', 'depature.address AS depature_address',
                'depature.latitude AS depature_latitude', 'depature.longitude AS depature_longitude', 'depature.postal_code AS depature_postal_code',
                'depature_state.id AS depature_state_id', 'depature_country.id AS depature_country_id', 'depature_city.id AS depature_city_id',

                'destination_state.name AS destination_state', 'destination_country.name AS destination_country', 'destination_city.name AS destination_city', 'destination.address AS destination_address',
                'destination.latitude AS destination_latitude', 'destination.longitude AS destination_longitude', 'destination.postal_code AS destination_postal_code',
                'destination_state.id AS destination_state_id', 'destination_country.id AS destination_country_id', 'destination_city.id AS destination_city_id',

                'companyAddress.address', 'companyStates.name AS state', 'companyCountries.name AS country', 'companyCities.name AS city', 'currencies.code AS currency'
            ]);

        $deliveryCompanies = [];
        $packageTypes = $request->input('packageTypes');
        $shippingDate = $request->input('shippingDate');
        $shipmentValue = $request->input('shipmentValue');
        $deliveryContents = $request->input('deliveryContents');

        $totalWeight = 0;
        foreach ($delivery_companies as $deliveryCompany) {
            $deliveryCompany['addressFrom'] = $addressFrom;
            $deliveryCompany['addressTo'] = $addressTo;
            $deliveryCompany['shippingDate'] = $shippingDate;
            $deliveryCompany['shipmentValue'] = $shipmentValue;
            $deliveryCompany['deliveryContents'] = $deliveryContents;
            $deliveryCompany['delivery_company_name'] = $deliveryCompany->company_name;

            $packages = [];

            foreach ($packageTypes as $packageType) {
                $package_type = $packageType['package_type'];
                $quantity = $packageType['quantity'];
                $actualWeight = $packageType['weight'];
                $length = $packageType['length'];
                $width = $packageType['width'];
                $height = $packageType['height'];
                $weight = 0;

                $cubic_area = $length * $width * $height;
                $dimensional_weight = $cubic_area / $deliveryCompany->dimensional_divisor;
                $dimensional_weight = round($dimensional_weight, 0, PHP_ROUND_HALF_UP);

                if ($dimensional_weight > $actualWeight) {
                    $weight = $dimensional_weight;
                } else {
                    $weight = $actualWeight;
                }

                array_push($packages, array(
                    'package_type' => $package_type,
                    'quantity' => $quantity,
                    'actualWeight' => $actualWeight,
                    'length' => $length,
                    'width' => $width,
                    'height' => $height,
                    'weight' => $weight,
                    'dimensional_weight' => $dimensional_weight
                ));
                $totalWeight += ($weight * $quantity);
            }

            $deliveryCompany['deliveryTime'] = '1-3 Days';
            $deliveryCompany['delivery_type'] = 'route';
            $deliveryCompany['packageTypes'] = $packages;
            $deliveryCompany['weight'] = $totalWeight;
            $deliveryCompany['pkgDeliveryFee'] = $deliveryCompany->deliveryFeePerKg * $deliveryCompany['weight'];
            $deliveryCompany['pkgDeliveryFee'] = $deliveryCompany['pkgDeliveryFee'] < $deliveryCompany->minDeliveryFee ? $deliveryCompany->minDeliveryFee : $deliveryCompany['pkgDeliveryFee'];

            array_push($deliveryCompanies, $deliveryCompany);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $deliveryCompanies,
            'message' => 'OK'
        ), 200);
    }

    public function submitCompanyDeliveryPoint(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $validator = Validator::make($request->all(), [
            'country_id'            => 'required',
            'state_id'              => 'required',
            'city_id'               => 'required',
            'address'               => 'required',
            'latitude'              => 'required',
            'longitude'             => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }

        if (!DeliveryCompany::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Delivery Company was not discoverd.'
            ), 500);
        }

        $deliveryCompany = DeliveryCompany::where('user_id', $userId)->first();

        $companyDeliveryPoint = new CompanyDeliveryPoint;
        $companyDeliveryPoint->user_id = $userId;
        $companyDeliveryPoint->company_id = $deliveryCompany->id;
        $companyDeliveryPoint->country_id = $request->input('country_id');
        $companyDeliveryPoint->state_id = $request->input('state_id');
        $companyDeliveryPoint->city_id = $request->input('city_id');
        $companyDeliveryPoint->address = $request->input('address');
        $companyDeliveryPoint->latitude = $request->input('latitude');
        $companyDeliveryPoint->longitude = $request->input('longitude');
        $companyDeliveryPoint->save();

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function fetchUserCompanyDeliveryPoints()
    {
        $user = auth()->user();
        $userId = $user->id;

        $deliveryCompany = DeliveryCompany::where('user_id', $userId)->first();

        $companyDeliveryPoints = CompanyDeliveryPoint::join('states', 'company_delivery_points.state_id', '=', 'states.id')
            ->join('cities', 'company_delivery_points.city_id', '=', 'cities.id')
            ->join('countries', 'company_delivery_points.country_id', '=', 'countries.id')
            ->orderBy('company_delivery_points.created_at', 'desc')
            ->where('company_delivery_points.company_id', $deliveryCompany->id)
            ->where('company_delivery_points.deleted', 'false')
            ->get(['company_delivery_points.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);

        $data = array(
            'status' => 200,
            'data' => $companyDeliveryPoints,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function deleteCompanyDeliveryPoint($pointId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = CompanyDeliveryPoint::where('id', $pointId)
            ->update(['deleted'  => 'true', 'deleterId'  => $userId, 'deleteTime'  => now()]);

        if ($data) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function submitCompanyDeliveryRoute(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $validator = Validator::make($request->all(), [
            'depature_addr_id'      => 'required',
            'destination_addr_id'   => 'required',
            'deliveryFeePerKg'      => 'required',
            'minDeliveryFee'        => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }

        if (!DeliveryCompany::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Delivery Company was not discoverd.'
            ), 500);
        }

        $deliveryCompany = DeliveryCompany::where('user_id', $userId)->first();

        $companyDeliveryRoute = new CompanyDeliveryRoute;
        $companyDeliveryRoute->user_id = $userId;
        $companyDeliveryRoute->company_id = $deliveryCompany->id;
        $companyDeliveryRoute->depature_addr_id = $request->input('depature_addr_id');
        $companyDeliveryRoute->destination_addr_id = $request->input('destination_addr_id');
        $companyDeliveryRoute->deliveryFeePerKg = $request->input('deliveryFeePerKg');
        $companyDeliveryRoute->minDeliveryFee = $request->input('minDeliveryFee');
        $companyDeliveryRoute->save();

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    public function fetchUserCompanyDeliveryRoutes()
    {
        $user = auth()->user();
        $userId = $user->id;

        $deliveryCompany = DeliveryCompany::where('user_id', $userId)->first();

        $companyDeliveryRoutes = CompanyDeliveryRoute::join('company_delivery_points AS depature', 'company_delivery_routes.depature_addr_id', '=', 'depature.id')
            ->join('company_delivery_points AS destination', 'company_delivery_routes.destination_addr_id', '=', 'destination.id')

            ->join('states AS depature_state', 'depature.state_id', '=', 'depature_state.id')
            ->join('cities AS depature_city', 'depature.city_id', '=', 'depature_city.id')
            ->join('countries AS depature_country', 'depature.country_id', '=', 'depature_country.id')

            ->join('states AS destination_state', 'destination.state_id', '=', 'destination_state.id')
            ->join('cities AS destination_city', 'destination.city_id', '=', 'destination_city.id')
            ->join('countries AS destination_country', 'destination.country_id', '=', 'destination_country.id')

            ->join('delivery_companies', 'company_delivery_routes.company_id', '=', 'delivery_companies.id')
            ->join('users', 'delivery_companies.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->orderBy('company_delivery_routes.created_at', 'desc')
            ->where('company_delivery_routes.company_id', $deliveryCompany->id)
            ->where('company_delivery_routes.deleted', 'false')
            ->get([
                'company_delivery_routes.*',

                'depature_state.name AS depature_state', 'depature_country.name AS depature_country', 'depature_city.name AS depature_city', 'depature.address AS depature_address',
                'depature.latitude AS depature_latitude', 'depature.longitude AS depature_longitude', 'depature.postal_code AS depature_postal_code',
                'depature_state.id AS depature_state_id', 'depature_country.id AS depature_country_id', 'depature_city.id AS depature_city_id',

                'destination_state.name AS destination_state', 'destination_country.name AS destination_country', 'destination_city.name AS destination_city', 'destination.address AS destination_address',
                'destination.latitude AS destination_latitude', 'destination.longitude AS destination_longitude', 'destination.postal_code AS destination_postal_code',
                'destination_state.id AS destination_state_id', 'destination_country.id AS destination_country_id', 'destination_city.id AS destination_city_id', 'currencies.code AS currency'
            ]);

        $data = array(
            'status' => 200,
            'data' => $companyDeliveryRoutes,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function fetchCompanyDeliveryRoutes($delivery_company_id)
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!DeliveryCompany::where('id', $delivery_company_id)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Delivery company doesent exist.'
            ), 500);
        }

        $companyDeliveryRoutes = CompanyDeliveryRoute::join('company_delivery_points AS depature', 'company_delivery_routes.depature_addr_id', '=', 'depature.id')
            ->join('company_delivery_points AS destination', 'company_delivery_routes.destination_addr_id', '=', 'destination.id')

            ->join('states AS depature_state', 'depature.state_id', '=', 'depature_state.id')
            ->join('cities AS depature_city', 'depature.city_id', '=', 'depature_city.id')
            ->join('countries AS depature_country', 'depature.country_id', '=', 'depature_country.id')

            ->join('states AS destination_state', 'destination.state_id', '=', 'destination_state.id')
            ->join('cities AS destination_city', 'destination.city_id', '=', 'destination_city.id')
            ->join('countries AS destination_country', 'destination.country_id', '=', 'destination_country.id')

            ->join('delivery_companies', 'company_delivery_routes.company_id', '=', 'delivery_companies.id')
            ->join('users', 'delivery_companies.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->orderBy('company_delivery_routes.created_at', 'desc')
            ->where('company_delivery_routes.company_id', $delivery_company_id)
            ->where('company_delivery_routes.deleted', 'false')
            ->get([
                'company_delivery_routes.*',

                'depature_state.name AS depature_state', 'depature_country.name AS depature_country', 'depature_city.name AS depature_city', 'depature.address AS depature_address',
                'depature.latitude AS depature_latitude', 'depature.longitude AS depature_longitude', 'depature.postal_code AS depature_postal_code',
                'depature_state.id AS depature_state_id', 'depature_country.id AS depature_country_id', 'depature_city.id AS depature_city_id',

                'destination_state.name AS destination_state', 'destination_country.name AS destination_country', 'destination_city.name AS destination_city', 'destination.address AS destination_address',
                'destination.latitude AS destination_latitude', 'destination.longitude AS destination_longitude', 'destination.postal_code AS destination_postal_code',
                'destination_state.id AS destination_state_id', 'destination_country.id AS destination_country_id', 'destination_city.id AS destination_city_id', 'currencies.code AS currency'
            ]);

        $data = array(
            'status' => 200,
            'data' => $companyDeliveryRoutes,
            'message' => 'OK'
        );
        return response()->json($data, 200);
    }

    public function deleteCompanyDeliveryRoute($destinationId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = CompanyDeliveryRoute::where('id', $destinationId)
            ->update(['deleted'  => 'true', 'deleterId'  => $userId, 'deleteTime'  => now()]);

        if ($data) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }
    private function loadDeliveryCompanyRoute($depatureCityId, $destinationCityId, $delivery_company_id)
    {
        $deliveryQuotation = CompanyDeliveryRoute::join('company_delivery_points AS depature', 'company_delivery_routes.depature_addr_id', '=', 'depature.id')
            ->join('company_delivery_points AS destination', 'company_delivery_routes.destination_addr_id', '=', 'destination.id')

            ->join('states AS depature_state', 'depature.state_id', '=', 'depature_state.id')
            ->join('cities AS depature_city', 'depature.city_id', '=', 'depature_city.id')
            ->join('countries AS depature_country', 'depature.country_id', '=', 'depature_country.id')

            ->join('states AS destination_state', 'destination.state_id', '=', 'destination_state.id')
            ->join('cities AS destination_city', 'destination.city_id', '=', 'destination_city.id')
            ->join('countries AS destination_country', 'destination.country_id', '=', 'destination_country.id')

            ->join('delivery_companies', 'company_delivery_routes.company_id', '=', 'delivery_companies.id')
            ->join('addresses AS companyAddress', 'delivery_companies.address_id', '=', 'companyAddress.id')
            ->join('states AS companyStates', 'companyAddress.state_id', '=', 'companyStates.id')
            ->join('cities AS companyCities', 'companyAddress.city_id', '=', 'companyCities.id')
            ->join('countries AS companyCountries', 'companyAddress.country_id', '=', 'companyCountries.id')

            ->join('users', 'delivery_companies.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->orderBy('company_delivery_routes.created_at', 'desc')
            ->where('depature.city_id', $depatureCityId)
            ->where('destination.city_id', $destinationCityId)
            ->where('delivery_companies.id', $delivery_company_id)
            ->where('company_delivery_routes.deleted', 'false')
            ->first([
                'delivery_companies.*',
                'company_delivery_routes.depature_addr_id',
                'company_delivery_routes.destination_addr_id',
                'company_delivery_routes.deliveryFeePerKg',
                'company_delivery_routes.minDeliveryFee',

                'depature_state.name AS depature_state', 'depature_country.name AS depature_country', 'depature_city.name AS depature_city', 'depature.address AS depature_address',
                'depature.latitude AS depature_latitude', 'depature.longitude AS depature_longitude', 'depature.postal_code AS depature_postal_code',
                'depature_state.id AS depature_state_id', 'depature_country.id AS depature_country_id', 'depature_city.id AS depature_city_id',

                'destination_state.name AS destination_state', 'destination_country.name AS destination_country', 'destination_city.name AS destination_city', 'destination.address AS destination_address',
                'destination.latitude AS destination_latitude', 'destination.longitude AS destination_longitude', 'destination.postal_code AS destination_postal_code',
                'destination_state.id AS destination_state_id', 'destination_country.id AS destination_country_id', 'destination_city.id AS destination_city_id',

                'companyAddress.address', 'companyStates.name AS state', 'companyCountries.name AS country', 'companyCities.name AS city', 'currencies.code AS currency'
            ]);
        return $deliveryQuotation;
    }

    private function loadRecomendedDeliveryRouteCompany($depatureCityId, $destinationCityId)
    {
        $deliveryQuotation = CompanyDeliveryRoute::join('company_delivery_points AS depature', 'company_delivery_routes.depature_addr_id', '=', 'depature.id')
            ->join('company_delivery_points AS destination', 'company_delivery_routes.destination_addr_id', '=', 'destination.id')

            ->join('states AS depature_state', 'depature.state_id', '=', 'depature_state.id')
            ->join('cities AS depature_city', 'depature.city_id', '=', 'depature_city.id')
            ->join('countries AS depature_country', 'depature.country_id', '=', 'depature_country.id')

            ->join('states AS destination_state', 'destination.state_id', '=', 'destination_state.id')
            ->join('cities AS destination_city', 'destination.city_id', '=', 'destination_city.id')
            ->join('countries AS destination_country', 'destination.country_id', '=', 'destination_country.id')

            ->join('delivery_companies', 'company_delivery_routes.company_id', '=', 'delivery_companies.id')
            ->join('addresses AS companyAddress', 'delivery_companies.address_id', '=', 'companyAddress.id')
            ->join('states AS companyStates', 'companyAddress.state_id', '=', 'companyStates.id')
            ->join('cities AS companyCities', 'companyAddress.city_id', '=', 'companyCities.id')
            ->join('countries AS companyCountries', 'companyAddress.country_id', '=', 'companyCountries.id')

            ->join('users', 'delivery_companies.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->orderBy('company_delivery_routes.deliveryFeePerKg', 'desc')
            ->where('depature.city_id', $depatureCityId)
            ->where('destination.city_id', $destinationCityId)
            ->where('company_delivery_routes.deleted', 'false')
            ->first([
                'delivery_companies.*',
                'company_delivery_routes.depature_addr_id',
                'company_delivery_routes.destination_addr_id',
                'company_delivery_routes.deliveryFeePerKg',
                'company_delivery_routes.minDeliveryFee',

                'depature_state.name AS depature_state', 'depature_country.name AS depature_country', 'depature_city.name AS depature_city', 'depature.address AS depature_address',
                'depature.latitude AS depature_latitude', 'depature.longitude AS depature_longitude', 'depature.postal_code AS depature_postal_code',
                'depature_state.id AS depature_state_id', 'depature_country.id AS depature_country_id', 'depature_city.id AS depature_city_id',

                'destination_state.name AS destination_state', 'destination_country.name AS destination_country', 'destination_city.name AS destination_city', 'destination.address AS destination_address',
                'destination.latitude AS destination_latitude', 'destination.longitude AS destination_longitude', 'destination.postal_code AS destination_postal_code',
                'destination_state.id AS destination_state_id', 'destination_country.id AS destination_country_id', 'destination_city.id AS destination_city_id',

                'companyAddress.address', 'companyStates.name AS state', 'companyCountries.name AS country', 'companyCities.name AS city', 'currencies.code AS currency'
            ]);
        return $deliveryQuotation;
    }

    private function loadDeliveryRouteCompanies($depatureCityId, $destinationCityId)
    {
        $deliveryQuotations = CompanyDeliveryRoute::join('company_delivery_points AS depature', 'company_delivery_routes.depature_addr_id', '=', 'depature.id')
            ->join('company_delivery_points AS destination', 'company_delivery_routes.destination_addr_id', '=', 'destination.id')

            ->join('states AS depature_state', 'depature.state_id', '=', 'depature_state.id')
            ->join('cities AS depature_city', 'depature.city_id', '=', 'depature_city.id')
            ->join('countries AS depature_country', 'depature.country_id', '=', 'depature_country.id')

            ->join('states AS destination_state', 'destination.state_id', '=', 'destination_state.id')
            ->join('cities AS destination_city', 'destination.city_id', '=', 'destination_city.id')
            ->join('countries AS destination_country', 'destination.country_id', '=', 'destination_country.id')

            ->join('delivery_companies', 'company_delivery_routes.company_id', '=', 'delivery_companies.id')
            ->join('addresses AS companyAddress', 'delivery_companies.address_id', '=', 'companyAddress.id')
            ->join('states AS companyStates', 'companyAddress.state_id', '=', 'companyStates.id')
            ->join('cities AS companyCities', 'companyAddress.city_id', '=', 'companyCities.id')
            ->join('countries AS companyCountries', 'companyAddress.country_id', '=', 'companyCountries.id')

            ->join('users', 'delivery_companies.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->orderBy('company_delivery_routes.deliveryFeePerKg', 'desc')
            ->where('depature.city_id', $depatureCityId)
            ->where('destination.city_id', $destinationCityId)
            ->where('company_delivery_routes.deleted', 'false')
            ->get([
                'delivery_companies.*',
                'company_delivery_routes.depature_addr_id',
                'company_delivery_routes.destination_addr_id',
                'company_delivery_routes.deliveryFeePerKg',
                'company_delivery_routes.minDeliveryFee',

                'depature_state.name AS depature_state', 'depature_country.name AS depature_country', 'depature_city.name AS depature_city', 'depature.address AS depature_address',
                'depature.latitude AS depature_latitude', 'depature.longitude AS depature_longitude', 'depature.postal_code AS depature_postal_code',
                'depature_state.id AS depature_state_id', 'depature_country.id AS depature_country_id', 'depature_city.id AS depature_city_id',

                'destination_state.name AS destination_state', 'destination_country.name AS destination_country', 'destination_city.name AS destination_city', 'destination.address AS destination_address',
                'destination.latitude AS destination_latitude', 'destination.longitude AS destination_longitude', 'destination.postal_code AS destination_postal_code',
                'destination_state.id AS destination_state_id', 'destination_country.id AS destination_country_id', 'destination_city.id AS destination_city_id',

                'companyAddress.address', 'companyStates.name AS state', 'companyCountries.name AS country', 'companyCities.name AS city', 'currencies.code AS currency'
            ]);
        return $deliveryQuotations;
    }

    public function loadDefaultDeliveryAddress()
    {
        $user = auth()->user();
        $userId = $user->id;

        $defaultDeliveryAddress = Address::join('states', 'addresses.state_id', '=', 'states.id')
            ->join('cities', 'addresses.city_id', '=', 'cities.id')
            ->join('countries', 'addresses.country_id', '=', 'countries.id')
            ->orderBy('addresses.created_at', 'desc')
            ->where('addresses.user_id', $userId)
            ->where('addresses.default_shipping', 1)
            ->where('addresses.deleted', 'false')
            ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);

        if (!isset($defaultDeliveryAddress)) {
            $defaultDeliveryAddress = Address::join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->orderBy('addresses.created_at', 'desc')
                ->where('addresses.user_id', $userId)
                ->where('addresses.deleted', 'false')
                ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);
        }

        if ($defaultDeliveryAddress) {
            return response()->json(array(
                'status' => 200,
                'data' => $defaultDeliveryAddress,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function updateUserDefaultDeliveryAddress($addressId)
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = Address::where('user_id', $userId)
            ->update(['default_shipping'  => false]);

        if ($data) {
            $data = Address::where('id', $addressId)
                ->where('user_id', $userId)
                ->update(['default_shipping'  => true]);

            if ($data) {
                return response()->json(array(
                    'status' => 200,
                    'message' => 'OK'
                ), 200);
            } else {
                return response()->json(array(
                    'status' => 500,
                    'message' => 'Something went wrong'
                ), 500);
            }
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function switchSellerProductFeaturedStatus(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $productId = $request->input('productId');
        $isFeatured = $request->input('is_featured');

        if (!Product::where('id', $productId)->where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Product doesent exist.'
            ), 500);
        }

        $is_featured = false;
        if ($isFeatured === "true" || $isFeatured === "True") {
            $is_featured = true;
        } else if ($isFeatured === "false" || $isFeatured === "False") {
            $is_featured = false;
        }

        $category = Product::where('id', $productId)->where('user_id', $userId)->update(['is_featured_on_seller' => $is_featured]);

        $postData = array(
            'status' => 200,
            'data' => $category,
            'message' => 'OK'
        );
        return response()->json($postData, 200);
    }

    public function loadSellerProducts(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $seller_id = $request->input('seller_id');
        $menuId = $request->input('menuId');

        $products = [];
        if ($menuId === 1) {
            $products = Product::where('products.user_id', $seller_id)
                ->where('products.is_featured_on_seller', 1)
                ->join('users', 'products.user_id', '=', 'users.id')
                ->join('currencies', 'users.country', '=', 'currencies.country_code')
                ->orderBy('id', 'desc')
                ->get(['products.*', 'users.user_name', 'currencies.code AS currency']);
        } else if ($menuId === 2) {
            $products = Product::where('products.user_id', $seller_id)
                ->join('users', 'products.user_id', '=', 'users.id')
                ->join('currencies', 'users.country', '=', 'currencies.country_code')
                ->orderBy('id', 'desc')
                ->get(['products.*', 'users.user_name', 'currencies.code AS currency']);
        } else if ($menuId === 3) {
            $products = Product::where('products.user_id', $seller_id)
                ->where('products.special_discount_end', '>', now())
                ->join('users', 'products.user_id', '=', 'users.id')
                ->join('currencies', 'users.country', '=', 'currencies.country_code')
                ->orderBy('id', 'desc')
                ->get(['products.*', 'users.user_name', 'currencies.code AS currency']);
        }

        $formatedProducts = [];
        foreach ($products as $product) {
            $images = [];

            foreach ($product->images as $image) {
                $image['url'] = getFileLink(@$image);
                array_push($images, $image);
            }
            $product->images = $images;
            $product->is_featured = $product->is_featured === 0 ? false : true;
            $product->has_variant = $product->has_variant === 0 ? false : true;
            $product->stock_notification = $product->stock_notification === 0 ? false : true;
            $product->is_featured_on_seller = $product->is_featured_on_seller === 0 ? false : true;
            $product->is_classified = $product->is_classified === 0 ? false : true;
            $product->is_wholesale = $product->is_wholesale === 0 ? false : true;
            $product->is_digital = $product->is_digital === 0 ? false : true;
            $product->is_refundable = $product->is_refundable === 0 ? false : true;
            $product->todays_deal = $product->todays_deal === 0 ? false : true;
            $product->is_approved = $product->is_approved === 0 ? false : true;
            $product->is_catalog = $product->is_catalog === 0 ? false : true;

            $attribute_sets = [];
            foreach ($product->attribute_sets as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                $attribute_set['attributes'] = ProductAttribute::where('product_id', $product->id)->where('attribute_id', $attribute_set_id)->get();
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $product['specifications'] = ProductSpecification::where('product_specifications.productId', $product->id)
                ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
                ->orderBy('product_specifications.id', 'desc')
                ->get(['product_specifications.*', 'specifications.title']);

            $product['category'] = Category::where('id', $product->category_id)->first();
            $product['brand'] = Brand::where('id', $product->brand_id)->first();

            try {
                //$product->packaging_config = json_decode($product->packaging_config, true);
            } catch (\Exception $e) {
            }

            array_push($formatedProducts, $product);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $formatedProducts,
            'message' => 'OK'
        ), 200);
    }

    public function submitSellerVoucher(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $validator = Validator::make($request->all(), [
            'fileId'                => 'required',
            'title'                 => 'required',
            'usage_limit'           => 'required',
            'limit_per_customer'    => 'required',
            'price'                 => 'required',
            'min_spend'             => 'required',
            'code'                  => 'required',
            'start_time'            => 'required',
            'end_time'              => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }

        $fileId = $request->input('fileId');

        if (!File::where('user_id', $userId)->where('id', $fileId)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'File was not discoverd.'
            ), 401);
        }

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Seller account was not discoverd.'
            ), 500);
        }

        $voucher = new Voucher;
        $voucher->user_id = $userId;
        $voucher->title = $request->input('title');
        $voucher->voucher_type = "seller";
        $voucher->usage_limit = $request->input('usage_limit');
        $voucher->limit_per_customer = $request->input('limit_per_customer');
        $voucher->price = $request->input('price');
        $voucher->min_spend = $request->input('min_spend');
        $voucher->capped_price = $request->input('capped_price');

        $voucher->code = $request->input('code');
        $voucher->start_time = $request->input('start_time');
        $voucher->end_time = $request->input('end_time');
        $voucher->thumbnail = getFileLink(File::where('user_id', $userId)->where('id', $fileId)->first());
        $voucher->thumbnail_id = $fileId;
        $voucher->save();

        return response()->json(array(
            'data' => $voucher,
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function loadSellerVouchers()
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Seller account was not discoverd.'
            ), 500);
        }

        $data = Voucher::where('vouchers.user_id', $userId)
            ->where('vouchers.status', '!=', 'trash')
            ->join('users', 'vouchers.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->get(['vouchers.*', 'currencies.code AS currency']);

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function updateSellerVoucherPublishedStatus(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $validator = Validator::make($request->all(), [
            'voucher_id'                => 'required',
            'is_published'              => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Seller account was not discoverd.'
            ), 500);
        }

        if (!Voucher::where('user_id', $userId)->where('id', $request->input('voucher_id'))->where('voucher_type', 'seller')->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Voucher was not discoverd.'
            ), 500);
        }

        $is_published = $request->input('is_published');
        $data = Voucher::where('id', $request->input('voucher_id'))
            ->update(['status'  => $is_published === true ? 'published' : 'unpublished']);

        if ($data) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function deleteSellerVoucher($voucher_id)
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Seller account was not discoverd.'
            ), 500);
        }

        if (!Voucher::where('user_id', $userId)->where('id', $voucher_id)->where('voucher_type', 'seller')->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Voucher was not discoverd.'
            ), 500);
        }

        $data = Voucher::where('id', $voucher_id)->update(['status'  => 'trash']);

        if ($data) {
            return response()->json(array(
                'status' => 200,
                'message' => 'OK'
            ), 200);
        } else {
            return response()->json(array(
                'status' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function updateSellerVoucher(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $validator = Validator::make($request->all(), [
            'voucher_id'            => 'required',
            'fileId'                => 'required',
            'title'                 => 'required',
            'usage_limit'           => 'required',
            'limit_per_customer'    => 'required',
            'price'                 => 'required',
            'min_spend'             => 'required',
            'code'                  => 'required',
            'start_time'            => 'required',
            'end_time'              => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }

        if (!Voucher::where('user_id', $userId)->where('id', $request->input('voucher_id'))->where('voucher_type', 'seller')->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Voucher was not discoverd.'
            ), 500);
        }

        $fileId = $request->input('fileId');

        if (!File::where('user_id', $userId)->where('id', $fileId)->exists()) {
            return response()->json(array(
                'status' => 401,
                'message' => 'File was not discoverd.'
            ), 401);
        }

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Seller account was not discoverd.'
            ), 500);
        }

        $data = Voucher::where('id', $request->input('voucher_id'))
            ->update([
                'title'  => $request->input('title'),
                'usage_limit'  => $request->input('usage_limit'),
                'limit_per_customer'  => $request->input('limit_per_customer'),
                'price'  => $request->input('price'),
                'min_spend'  => $request->input('min_spend'),
                'capped_price'  => $request->input('capped_price'),
                'code'  => $request->input('code'),
                'start_time'  => $request->input('start_time'),
                'end_time'  => $request->input('end_time'),
                'thumbnail'  => getFileLink(File::where('user_id', $userId)->where('id', $fileId)->first()),
                'thumbnail_id'  => $fileId,
            ]);

        return response()->json(array(
            'data' => $data,
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function loadGiftVouchers()
    {
        $user = auth()->user();
        $userId = $user->id;

        $data = Voucher::where('vouchers.status', 'published')
            ->where('vouchers.system_status', 'approved')
            ->join('users', 'vouchers.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->get(['vouchers.*', 'currencies.code AS currency']);

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function submitSellerAdvert(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $validator = Validator::make($request->all(), [
            'budget'                 => 'required',
            'primary_target'        => 'required',
            'start_time'            => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(array(
                'status' => 422,
                'message' => 'Required field missing'
            ), 422);
        }

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Seller account was not discoverd.'
            ), 500);
        }

        $seller = Seller::where('user_id', $userId)->first();

        $advert = array();
        if (!Advert::where('shop_id', $seller->id)->exists()) {
            $advert = new Advert;
            $advert->shop_id = $seller->id;
            $advert->budget = $request->input('budget');
            $advert->primary_target = $request->input('primary_target');
            $advert->start_time = $request->input('start_time');
            $advert->end_time = $request->input('end_time');
            $advert->save();
        } else {
            $advert = Advert::where('shop_id', $seller->id)
                ->update([
                    'budget'  => $request->input('budget'),
                    'primary_target'  => $request->input('primary_target'),
                    'start_time'  => $request->input('start_time'),
                    'end_time'  => $request->input('end_time'),
                ]);
        }

        return response()->json(array(
            'data' => $advert,
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function loadSellerAdvert()
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Seller account was not discoverd.'
            ), 500);
        }

        $seller = Seller::where('user_id', $userId)->first();

        $data = Advert::where('adverts.shop_id', $seller->id)
            ->join('sellers', 'sellers.id', '=', 'adverts.shop_id')
            ->join('users', 'sellers.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->first(['adverts.*', 'currencies.code AS currency']);

        return response()->json(array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        ), 200);
    }

    public function updateSellerOrderDeliveryStatus(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $shippingDate = $request->input('shippingDate');
        $invoice_id = $request->input('invoice_id');

        if (!Seller::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Seller account was not discoverd.'
            ), 500);
        }

        $seller = Seller::where('user_id', $userId)->first();

        if (!OrderItem::join('products', 'order_items.product_id', '=', 'products.id')
            ->where('order_items.invoice_id', $invoice_id)
            ->where('products.seller_id', $seller->id)
            ->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Order products were not discoverd.'
            ), 500);
        }

        if (!OrderItem::join('products', 'order_items.product_id', '=', 'products.id')
            ->where('order_items.invoice_id', $invoice_id)
            ->where('products.seller_id', $seller->id)->where('order_items.delivery_status', 'pending')->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'This Order was awarded to shipping companies.'
            ), 500);
        }

        $orderItems = OrderItem::where('order_items.invoice_id', $invoice_id)
            ->join('products', 'products.id', '=', 'order_items.product_id')
            ->where('products.user_id', $userId)
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->join('addresses', 'order_items.delivery_address_id', '=', 'addresses.id')
            ->join('states', 'order_items.delivery_state_id', '=', 'states.id')
            ->join('cities', 'order_items.delivery_city_id', '=', 'cities.id')
            ->join('countries', 'order_items.delivery_country_id', '=', 'countries.id')

            ->join('orders', 'order_items.invoice_id', '=', 'orders.invoice_id')

            ->groupBy('order_items.invoice_id')
            ->groupBy('order_items.delivery_company_id')
            ->groupBy('order_items.delivery_address_id')

            ->orderByDesc(DB::raw('MAX(order_items.created_at)'))
            ->get([
                'products.*',
                'order_items.order_quantity',
                'order_items.attributes AS order_attributes',
                'order_items.id AS cart_id',
                'order_items.delivery_cost',
                'order_items.deliveryTime',
                'order_items.delivery_type',
                'order_items.delivery_company_id',
                'order_items.delivery_address_id',
                'orders.billing_address AS billing_address_id',
                'order_items.delivery_country_id',
                'order_items.delivery_state_id',
                'order_items.delivery_city_id',
                'order_items.delivery_latitude',
                'order_items.delivery_longitude',
                'order_items.delivery_postal_code',
                'order_items.invoice_id',
                'users.user_name',
                'states.name AS state',
                'countries.name AS country',
                'cities.name AS city',
                'currencies.code AS currency',

                'order_items.variation AS order_variation',
                'order_items.price AS order_price',
                'order_items.tax AS order_tax',
                'order_items.discount AS order_discount',
                'order_items.coupon_discount AS order_coupon_discount',
                'order_items.product_referral_code AS order_product_referral_code',

                DB::raw('SUM(order_items.order_quantity) as total_order_quantity'),
                DB::raw('SUM(order_items.price) as total_price'),
                DB::raw('SUM(order_items.tax) as total_tax'),
                DB::raw('SUM(order_items.discount) as total_discount'),
                DB::raw('SUM(order_items.coupon_discount) as total_coupon_discount'),
                DB::raw('SUM(order_items.delivery_cost) as total_delivery_cost'),
            ]);


        // Loop through the grouped products
        foreach ($orderItems as $orderItem) {
            $uuid = $this->get_uuid();

            $billing_address = Address::join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->orderBy('addresses.created_at', 'desc')
                ->where('addresses.id', $orderItem->billing_address_id)
                ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);

            $shipping_address = Address::join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->orderBy('addresses.created_at', 'desc')
                ->where('addresses.id', $orderItem->delivery_address_id)
                ->first(['addresses.*', 'states.name AS state', 'countries.name AS country', 'cities.name AS city']);

            $deliveryRequest = new DeliveryRequest;
            $deliveryRequest->invoice_id = $uuid;
            $deliveryRequest->client_type = 'shop';
            $deliveryRequest->sender_id = $seller->id;
            $deliveryRequest->reciever_id = $orderItem->user_id;
            $deliveryRequest->ext_invoice_id = $invoice_id;
            $deliveryRequest->delivery_company_id = $orderItem->delivery_company_id;
            $deliveryRequest->billing_address = json_encode($billing_address);
            $deliveryRequest->billing_address_id = $orderItem->billing_address_id;
            $deliveryRequest->shipping_address = json_encode($shipping_address);
            $deliveryRequest->shipping_address_id = $orderItem->delivery_address_id;
            $deliveryRequest->shipping_date = $shippingDate;
            $deliveryRequest->delivery_type = $orderItem->delivery_type;
            $deliveryRequest->order_quantity = $orderItem->total_order_quantity;
            $deliveryRequest->shipment_value = $orderItem->total_tax + ($orderItem->total_price - ($orderItem->total_discount + $orderItem->total_coupon_discount));
            $deliveryRequest->shipping_cost = $orderItem->total_delivery_cost;
            $deliveryRequest->total_payable = $orderItem->total_delivery_cost;
            $deliveryRequest->save();

            $formatedProducts = $this->loadSellerInvoiceDeliveryPackages($invoice_id, $userId, $orderItem->delivery_company_id, $orderItem->delivery_address_id);

            foreach ($formatedProducts as $sellerOrderItem) {
                $deliveryRequestPackage = new DeliveryRequestPackage;
                $deliveryRequestPackage->invoice_id = $uuid;
                $deliveryRequestPackage->packaging_config = $sellerOrderItem->packaging_config;
                $deliveryRequestPackage->order_quantity = $sellerOrderItem->order_quantity;
                $deliveryRequestPackage->package_label = $sellerOrderItem->name;
                $deliveryRequestPackage->package_value = $sellerOrderItem->order_tax + ($sellerOrderItem->order_price - ($sellerOrderItem->order_discount + $sellerOrderItem->order_coupon_discount));
                $deliveryRequestPackage->save();
            }
        }

        OrderItem::join('products', 'order_items.product_id', '=', 'products.id')->where('order_items.invoice_id', $invoice_id)->where('products.seller_id', $seller->id)
            ->update(['delivery_award_date'  => $shippingDate, 'delivery_status'  => 'awarded']);

        if (sizeof(OrderItem::where('invoice_id', $invoice_id)->get()) == sizeof(OrderItem::join('products', 'order_items.product_id', '=', 'products.id')->where('order_items.invoice_id', $invoice_id)->where('products.seller_id', $seller->id)->get())) {
            Order::where('invoice_id', $invoice_id)->where('user_id', $userId)
                ->update(['delivery_award_date'  => $shippingDate, 'delivery_status'  => 'awarded']);
        } else {
            //check if other Order items status were 'awarded', 'on_route', 'deliverd' or 'confirmed', if true award the Order
            if (!OrderItem::join('products', 'order_items.product_id', '=', 'products.id')->where('order_items.invoice_id', $invoice_id)->where('products.seller_id',  '!=', $seller->id)->where('delivery_status', 'pending')->exists()) {
                Order::where('invoice_id', $invoice_id)
                    ->update(['delivery_award_date'  => $shippingDate, 'delivery_status'  => 'awarded']);
            }
        }

        return response()->json(array(
            'status' => 200,
            'message' => 'OK'
        ), 200);
    }

    private function loadSellerInvoiceDeliveryPackages($invoice_id, $userId, $delivery_company_id, $delivery_address_id)
    {
        $products = OrderItem::where('order_items.invoice_id', $invoice_id)
            ->where('order_items.delivery_company_id', $delivery_company_id)
            ->where('order_items.delivery_address_id', $delivery_address_id)
            ->where('products.user_id', $userId)
            ->join('products', 'products.id', '=', 'order_items.product_id')
            ->join('users', 'products.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')

            ->join('addresses', 'order_items.delivery_address_id', '=', 'addresses.id')
            ->join('states', 'order_items.delivery_state_id', '=', 'states.id')
            ->join('cities', 'order_items.delivery_city_id', '=', 'cities.id')
            ->join('countries', 'order_items.delivery_country_id', '=', 'countries.id')


            ->join('orders', 'order_items.invoice_id', '=', 'orders.invoice_id')

            ->orderBy('order_items.created_at', 'desc')

            ->get([
                'products.*',
                'order_items.order_quantity',
                'order_items.attributes AS order_attributes',
                'order_items.id AS cart_id',
                'order_items.delivery_cost',
                'order_items.deliveryTime',
                'order_items.delivery_type',
                'order_items.delivery_company_id',
                'order_items.delivery_address_id',
                'orders.billing_address AS billing_address_id',
                'order_items.delivery_country_id',
                'order_items.delivery_state_id',
                'order_items.delivery_city_id',
                'order_items.delivery_latitude',
                'order_items.delivery_longitude',
                'order_items.delivery_postal_code',
                'order_items.invoice_id',
                'users.user_name',
                'states.name AS state',
                'countries.name AS country',
                'cities.name AS city',
                'currencies.code AS currency',

                'order_items.variation AS order_variation',
                'order_items.price AS order_price',
                'order_items.tax AS order_tax',
                'order_items.discount AS order_discount',
                'order_items.coupon_discount AS order_coupon_discount',
                'order_items.product_referral_code AS order_product_referral_code',
            ]);

        $formatedProducts = [];
        foreach ($products as $product) {
            $images = [];

            foreach (json_decode($product->images, true) as $image) {
                $image['url'] = getFileLink(@$image);
                array_push($images, $image);
            }
            $product->images = $images;
            $product->has_variant = $product->has_variant === 0 ? false : true;
            $product->stock_notification = $product->stock_notification === 0 ? false : true;
            $product->is_featured = $product->is_featured === 0 ? false : true;
            $product->is_featured_on_seller = $product->is_featured_on_seller === 0 ? false : true;
            $product->is_classified = $product->is_classified === 0 ? false : true;
            $product->is_wholesale = $product->is_wholesale === 0 ? false : true;
            $product->is_digital = $product->is_digital === 0 ? false : true;
            $product->is_refundable = $product->is_refundable === 0 ? false : true;
            $product->todays_deal = $product->todays_deal === 0 ? false : true;
            $product->is_approved = $product->is_approved === 0 ? false : true;
            $product->is_catalog = $product->is_catalog === 0 ? false : true;

            $product['order_full_price'] = $product->order_price + $product->order_discount;

            $attribute_sets = [];
            foreach (json_decode($product->attribute_sets, true) as $attribute_set) {
                $attribute_set_id = $attribute_set['id'];
                $attributes = ProductAttribute::where('product_id', $product->id)->where('attribute_id', $attribute_set_id)->get();
                $set_attributes = [];
                foreach ($attributes as $attribute) {
                    foreach (json_decode($product->order_attributes, true) as $order_attribute) {
                        if ($order_attribute['attribute_id'] === $attribute->id && $order_attribute['attribute_set_id'] === $attribute_set_id) {
                            $attribute['is_selected'] = true;
                        }
                    }
                    array_push($set_attributes, $attribute);
                }
                $attribute_set['attributes'] = $set_attributes;

                foreach (json_decode($product->order_attributes, true) as $order_attribute) {
                    if ($order_attribute['attribute_set_id'] === $attribute_set_id) {
                        $attribute_set['SelectedAttribute'] = ProductAttribute::where('id', $order_attribute['attribute_id'])->first();
                    }
                }
                array_push($attribute_sets, $attribute_set);
            }
            $product->attribute_sets = $attribute_sets;

            $product->coupon_discount = 0;

            $product['specifications'] = ProductSpecification::where('product_specifications.productId', $product->id)
                ->join('specifications', 'product_specifications.specificationId', '=', 'specifications.id')
                ->orderBy('product_specifications.id', 'desc')
                ->get(['product_specifications.*', 'specifications.title']);


            if ($product->delivery_type === 'route' || $product->delivery_type === 'express') {
                $delivery_company = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                    ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->where('delivery_companies.id', $product['delivery_company_id'])
                    ->where('addresses.deleted', 'false')
                    ->first([
                        'delivery_companies.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state',
                        'countries.name AS country',
                        'cities.name AS city'
                    ]);

                $product['delivery_company_name'] = $delivery_company->company_name;
                $product['delivery_company_address'] = $delivery_company['address'];
                $product['delivery_company_state'] = $delivery_company['state'];
                $product['delivery_company_country'] = $delivery_company['country'];
                $product['delivery_company_city'] = $delivery_company['city'];
            } else if ($product->delivery_type === 'seller') {
                $delivery_company = Seller::where('sellers.id', $product['delivery_company_id'])
                    ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->first([
                        'sellers.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state', 'countries.name AS country', 'cities.name AS city', 'addresses.id AS addr_id'
                    ]);

                $product['delivery_company_name'] = $delivery_company->shop_name;
                $product['delivery_company_address'] = $delivery_company['address'];
                $product['delivery_company_state'] = $delivery_company['state'];
                $product['delivery_company_country'] = $delivery_company['country'];
                $product['delivery_company_city'] = $delivery_company['city'];
            }

            array_push($formatedProducts, $product);
        }

        return $formatedProducts;
    }

    public function loadDeliveryRequestsToMe()
    {
        $user = auth()->user();
        $userId = $user->id;

        $deliveryRequests = DeliveryRequest::where('reciever_id', $userId)->get();

        $requestsData = array();
        foreach ($deliveryRequests as $deliveryRequest) {
            $deliveryRequest->billing_address = json_decode($deliveryRequest->billing_address, true);
            $deliveryRequest->shipping_address = json_decode($deliveryRequest->shipping_address, true);

            if ($deliveryRequest->delivery_type === 'route' || $deliveryRequest->delivery_type === 'express') {
                $delivery_company = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                    ->join('users', 'delivery_companies.user_id', '=', 'users.id')
                    ->join('currencies', 'users.country', '=', 'currencies.country_code')
                    ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->where('delivery_companies.id', $deliveryRequest['delivery_company_id'])
                    ->where('addresses.deleted', 'false')
                    ->first([
                        'delivery_companies.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state',
                        'countries.name AS country',
                        'cities.name AS city',
                        'currencies.code AS currency',
                    ]);

                $deliveryRequest['delivery_company_name'] = $delivery_company->company_name;
                $deliveryRequest['delivery_company_address'] = $delivery_company['address'];
                $deliveryRequest['delivery_company_state'] = $delivery_company['state'];
                $deliveryRequest['delivery_company_country'] = $delivery_company['country'];
                $deliveryRequest['delivery_company_city'] = $delivery_company['city'];
                $deliveryRequest['currency'] = $delivery_company['currency'];
            } else if ($deliveryRequest->delivery_type === 'seller') {
                $delivery_company = Seller::where('sellers.id', $deliveryRequest['delivery_company_id'])
                    ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                    ->join('users', 'sellers.user_id', '=', 'users.id')
                    ->join('currencies', 'users.country', '=', 'currencies.country_code')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->first([
                        'sellers.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state', 'countries.name AS country', 'cities.name AS city',
                        'addresses.id AS addr_id',
                        'currencies.code AS currency',
                    ]);

                $deliveryRequest['delivery_company_name'] = $delivery_company->shop_name;
                $deliveryRequest['delivery_company_address'] = $delivery_company['address'];
                $deliveryRequest['delivery_company_state'] = $delivery_company['state'];
                $deliveryRequest['delivery_company_country'] = $delivery_company['country'];
                $deliveryRequest['delivery_company_city'] = $delivery_company['city'];
                $deliveryRequest['currency'] = $delivery_company['currency'];
            }

            array_push($requestsData, $deliveryRequest);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $requestsData,
            'message' => 'OK'
        ), 200);
    }

    public function loadDeliveryRequestPackages($invoice_id)
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!DeliveryRequestPackage::where('invoice_id', $invoice_id)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'No packages were discoverd.'
            ), 500);
        }

        $deliveryRequestPackages = DeliveryRequestPackage::where('delivery_request_packages.invoice_id', $invoice_id)
            ->join('delivery_requests', 'delivery_request_packages.invoice_id', '=', 'delivery_requests.invoice_id')
            ->join('delivery_companies', 'delivery_companies.id', '=', 'delivery_requests.delivery_company_id')
            ->join('users', 'delivery_companies.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->get([
                'delivery_request_packages.*',
                'currencies.code AS currency',
            ]);

        $packageData = array();
        foreach ($deliveryRequestPackages as $deliveryRequestPackage) {
            $deliveryRequestPackage->packaging_config = json_decode($deliveryRequestPackage->packaging_config, true);
            array_push($packageData, $deliveryRequestPackage);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $packageData,
            'message' => 'OK'
        ), 200);
    }

    public function loadDeliveryRequestsFromMe()
    {
        $user = auth()->user();
        $userId = $user->id;

        $deliveryRequests = DeliveryRequest::where('sender_id', $userId)->get();

        $requestsData = array();
        foreach ($deliveryRequests as $deliveryRequest) {
            $deliveryRequest->billing_address = json_decode($deliveryRequest->billing_address, true);
            $deliveryRequest->shipping_address = json_decode($deliveryRequest->shipping_address, true);

            if ($deliveryRequest->delivery_type === 'route' || $deliveryRequest->delivery_type === 'express') {
                $delivery_company = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                    ->join('users', 'delivery_companies.user_id', '=', 'users.id')
                    ->join('currencies', 'users.country', '=', 'currencies.country_code')
                    ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->where('delivery_companies.id', $deliveryRequest['delivery_company_id'])
                    ->where('addresses.deleted', 'false')
                    ->first([
                        'delivery_companies.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state',
                        'countries.name AS country',
                        'cities.name AS city',
                        'currencies.code AS currency',
                    ]);

                $deliveryRequest['delivery_company_name'] = $delivery_company->company_name;
                $deliveryRequest['delivery_company_address'] = $delivery_company['address'];
                $deliveryRequest['delivery_company_state'] = $delivery_company['state'];
                $deliveryRequest['delivery_company_country'] = $delivery_company['country'];
                $deliveryRequest['delivery_company_city'] = $delivery_company['city'];
                $deliveryRequest['currency'] = $delivery_company['currency'];
            } else if ($deliveryRequest->delivery_type === 'seller') {
                $delivery_company = Seller::where('sellers.id', $deliveryRequest['delivery_company_id'])
                    ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                    ->join('users', 'sellers.user_id', '=', 'users.id')
                    ->join('currencies', 'users.country', '=', 'currencies.country_code')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->first([
                        'sellers.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state', 'countries.name AS country', 'cities.name AS city',
                        'addresses.id AS addr_id',
                        'currencies.code AS currency',
                    ]);

                $deliveryRequest['delivery_company_name'] = $delivery_company->shop_name;
                $deliveryRequest['delivery_company_address'] = $delivery_company['address'];
                $deliveryRequest['delivery_company_state'] = $delivery_company['state'];
                $deliveryRequest['delivery_company_country'] = $delivery_company['country'];
                $deliveryRequest['delivery_company_city'] = $delivery_company['city'];
                $deliveryRequest['currency'] = $delivery_company['currency'];
            }

            array_push($requestsData, $deliveryRequest);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $requestsData,
            'message' => 'OK'
        ), 200);
    }

    public function loadDeliveryCompanyRequests()
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!DeliveryCompany::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'DeliveryCompany account was not discoverd.'
            ), 500);
        }

        $deliveryCompany = DeliveryCompany::where('user_id', $userId)->first();

        $deliveryRequests = DeliveryRequest::where('delivery_company_id', $deliveryCompany->id)
            ->where('delivery_type', '!=', 'seller')->get();

        $requestsData = array();
        foreach ($deliveryRequests as $deliveryRequest) {
            $deliveryRequest->billing_address = json_decode($deliveryRequest->billing_address, true);
            $deliveryRequest->shipping_address = json_decode($deliveryRequest->shipping_address, true);

            if ($deliveryRequest->delivery_type === 'route' || $deliveryRequest->delivery_type === 'express') {
                $delivery_company = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                    ->join('users', 'delivery_companies.user_id', '=', 'users.id')
                    ->join('currencies', 'users.country', '=', 'currencies.country_code')
                    ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->where('delivery_companies.id', $deliveryRequest['delivery_company_id'])
                    ->where('addresses.deleted', 'false')
                    ->first([
                        'delivery_companies.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state',
                        'countries.name AS country',
                        'cities.name AS city',
                        'currencies.code AS currency',
                    ]);

                $deliveryRequest['delivery_company_name'] = $delivery_company->company_name;
                $deliveryRequest['delivery_company_address'] = $delivery_company['address'];
                $deliveryRequest['delivery_company_state'] = $delivery_company['state'];
                $deliveryRequest['delivery_company_country'] = $delivery_company['country'];
                $deliveryRequest['delivery_company_city'] = $delivery_company['city'];
                $deliveryRequest['currency'] = $delivery_company['currency'];
            } else if ($deliveryRequest->delivery_type === 'seller') {
                $delivery_company = Seller::where('sellers.id', $deliveryRequest['delivery_company_id'])
                    ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                    ->join('users', 'sellers.user_id', '=', 'users.id')
                    ->join('currencies', 'users.country', '=', 'currencies.country_code')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->first([
                        'sellers.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state', 'countries.name AS country', 'cities.name AS city',
                        'addresses.id AS addr_id',
                        'currencies.code AS currency',
                    ]);

                $deliveryRequest['delivery_company_name'] = $delivery_company->shop_name;
                $deliveryRequest['delivery_company_address'] = $delivery_company['address'];
                $deliveryRequest['delivery_company_state'] = $delivery_company['state'];
                $deliveryRequest['delivery_company_country'] = $delivery_company['country'];
                $deliveryRequest['delivery_company_city'] = $delivery_company['city'];
                $deliveryRequest['currency'] = $delivery_company['currency'];
            }

            array_push($requestsData, $deliveryRequest);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $requestsData,
            'message' => 'OK'
        ), 200);
    }

    public function loadDeliveryCompanyPendingRequests()
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!DeliveryCompany::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'DeliveryCompany account was not discoverd.'
            ), 500);
        }

        $deliveryCompany = DeliveryCompany::where('user_id', $userId)->first();

        $deliveryRequests = DeliveryRequest::where('delivery_company_id', $deliveryCompany->id)
            ->where('delivery_type', '!=', 'seller')
            ->where(function ($q) {
                $q->where('delivery_status', 'pending')
                    ->orWhere('delivery_status', 'accepted');
            })->get();

        $requestsData = array();
        foreach ($deliveryRequests as $deliveryRequest) {
            $deliveryRequest->billing_address = json_decode($deliveryRequest->billing_address, true);
            $deliveryRequest->shipping_address = json_decode($deliveryRequest->shipping_address, true);

            if ($deliveryRequest->delivery_type === 'route' || $deliveryRequest->delivery_type === 'express') {
                $delivery_company = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                    ->join('users', 'delivery_companies.user_id', '=', 'users.id')
                    ->join('currencies', 'users.country', '=', 'currencies.country_code')
                    ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->where('delivery_companies.id', $deliveryRequest['delivery_company_id'])
                    ->where('addresses.deleted', 'false')
                    ->first([
                        'delivery_companies.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state',
                        'countries.name AS country',
                        'cities.name AS city',
                        'currencies.code AS currency',
                    ]);

                $deliveryRequest['delivery_company_name'] = $delivery_company->company_name;
                $deliveryRequest['delivery_company_address'] = $delivery_company['address'];
                $deliveryRequest['delivery_company_state'] = $delivery_company['state'];
                $deliveryRequest['delivery_company_country'] = $delivery_company['country'];
                $deliveryRequest['delivery_company_city'] = $delivery_company['city'];
                $deliveryRequest['currency'] = $delivery_company['currency'];
            } else if ($deliveryRequest->delivery_type === 'seller') {
                $delivery_company = Seller::where('sellers.id', $deliveryRequest['delivery_company_id'])
                    ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                    ->join('users', 'sellers.user_id', '=', 'users.id')
                    ->join('currencies', 'users.country', '=', 'currencies.country_code')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->first([
                        'sellers.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state', 'countries.name AS country', 'cities.name AS city',
                        'addresses.id AS addr_id',
                        'currencies.code AS currency',
                    ]);

                $deliveryRequest['delivery_company_name'] = $delivery_company->shop_name;
                $deliveryRequest['delivery_company_address'] = $delivery_company['address'];
                $deliveryRequest['delivery_company_state'] = $delivery_company['state'];
                $deliveryRequest['delivery_company_country'] = $delivery_company['country'];
                $deliveryRequest['delivery_company_city'] = $delivery_company['city'];
                $deliveryRequest['currency'] = $delivery_company['currency'];
            }

            array_push($requestsData, $deliveryRequest);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $requestsData,
            'message' => 'OK'
        ), 200);
    }

    public function loadDeliveryCompanyCancelledRequests()
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!DeliveryCompany::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'DeliveryCompany account was not discoverd.'
            ), 500);
        }

        $deliveryCompany = DeliveryCompany::where('user_id', $userId)->first();

        $deliveryRequests = DeliveryRequest::where('delivery_company_id', $deliveryCompany->id)
            ->where('delivery_type', '!=', 'seller')
            ->where(function ($q) {
                $q->where('delivery_status', 'cancelled')
                    ->orWhere('delivery_status', 'rejected');
            })->get();

        $requestsData = array();
        foreach ($deliveryRequests as $deliveryRequest) {
            $deliveryRequest->billing_address = json_decode($deliveryRequest->billing_address, true);
            $deliveryRequest->shipping_address = json_decode($deliveryRequest->shipping_address, true);

            if ($deliveryRequest->delivery_type === 'route' || $deliveryRequest->delivery_type === 'express') {
                $delivery_company = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                    ->join('users', 'delivery_companies.user_id', '=', 'users.id')
                    ->join('currencies', 'users.country', '=', 'currencies.country_code')
                    ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->where('delivery_companies.id', $deliveryRequest['delivery_company_id'])
                    ->where('addresses.deleted', 'false')
                    ->first([
                        'delivery_companies.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state',
                        'countries.name AS country',
                        'cities.name AS city',
                        'currencies.code AS currency',
                    ]);

                $deliveryRequest['delivery_company_name'] = $delivery_company->company_name;
                $deliveryRequest['delivery_company_address'] = $delivery_company['address'];
                $deliveryRequest['delivery_company_state'] = $delivery_company['state'];
                $deliveryRequest['delivery_company_country'] = $delivery_company['country'];
                $deliveryRequest['delivery_company_city'] = $delivery_company['city'];
                $deliveryRequest['currency'] = $delivery_company['currency'];
            } else if ($deliveryRequest->delivery_type === 'seller') {
                $delivery_company = Seller::where('sellers.id', $deliveryRequest['delivery_company_id'])
                    ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                    ->join('users', 'sellers.user_id', '=', 'users.id')
                    ->join('currencies', 'users.country', '=', 'currencies.country_code')
                    ->join('states', 'addresses.state_id', '=', 'states.id')
                    ->join('cities', 'addresses.city_id', '=', 'cities.id')
                    ->join('countries', 'addresses.country_id', '=', 'countries.id')
                    ->first([
                        'sellers.*',
                        'addresses.address',
                        'addresses.city_id',
                        'addresses.country_id',
                        'addresses.latitude',
                        'addresses.longitude',
                        'states.name AS state', 'countries.name AS country', 'cities.name AS city',
                        'addresses.id AS addr_id',
                        'currencies.code AS currency',
                    ]);

                $deliveryRequest['delivery_company_name'] = $delivery_company->shop_name;
                $deliveryRequest['delivery_company_address'] = $delivery_company['address'];
                $deliveryRequest['delivery_company_state'] = $delivery_company['state'];
                $deliveryRequest['delivery_company_country'] = $delivery_company['country'];
                $deliveryRequest['delivery_company_city'] = $delivery_company['city'];
                $deliveryRequest['currency'] = $delivery_company['currency'];
            }

            array_push($requestsData, $deliveryRequest);
        }

        return response()->json(array(
            'status' => 200,
            'data' => $requestsData,
            'message' => 'OK'
        ), 200);
    }

    public function loadDeliveryCompanyRequestDetails($invoice_id)
    {
        $user = auth()->user();
        $userId = $user->id;

        if (!DeliveryCompany::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'DeliveryCompany account was not discoverd.'
            ), 500);
        }

        $deliveryCompany = DeliveryCompany::where('user_id', $userId)->first();

        $deliveryRequest = DeliveryRequest::where('delivery_company_id', $deliveryCompany->id)
            ->where('delivery_type', '!=', 'seller')->where('invoice_id', $invoice_id)->first();

        $deliveryRequest->billing_address = json_decode($deliveryRequest->billing_address, true);
        $deliveryRequest->shipping_address = json_decode($deliveryRequest->shipping_address, true);

        if ($deliveryRequest->delivery_type === 'route' || $deliveryRequest->delivery_type === 'express') {
            $delivery_company = DeliveryCompany::where('delivery_companies.express_delivery_enabled', 'True')
                ->join('users', 'delivery_companies.user_id', '=', 'users.id')
                ->join('currencies', 'users.country', '=', 'currencies.country_code')
                ->join('addresses', 'delivery_companies.address_id', '=', 'addresses.id')
                ->join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->where('delivery_companies.id', $deliveryRequest['delivery_company_id'])
                ->where('addresses.deleted', 'false')
                ->first([
                    'delivery_companies.*',
                    'addresses.address',
                    'addresses.city_id',
                    'addresses.country_id',
                    'addresses.latitude',
                    'addresses.longitude',
                    'states.name AS state',
                    'countries.name AS country',
                    'cities.name AS city',
                    'currencies.code AS currency',
                ]);

            $deliveryRequest['delivery_company_name'] = $delivery_company->company_name;
            $deliveryRequest['delivery_company_address'] = $delivery_company['address'];
            $deliveryRequest['delivery_company_state'] = $delivery_company['state'];
            $deliveryRequest['delivery_company_country'] = $delivery_company['country'];
            $deliveryRequest['delivery_company_city'] = $delivery_company['city'];
            $deliveryRequest['currency'] = $delivery_company['currency'];
        } else if ($deliveryRequest->delivery_type === 'seller') {
            $delivery_company = Seller::where('sellers.id', $deliveryRequest['delivery_company_id'])
                ->join('addresses', 'sellers.address_id', '=', 'addresses.id')
                ->join('users', 'sellers.user_id', '=', 'users.id')
                ->join('currencies', 'users.country', '=', 'currencies.country_code')
                ->join('states', 'addresses.state_id', '=', 'states.id')
                ->join('cities', 'addresses.city_id', '=', 'cities.id')
                ->join('countries', 'addresses.country_id', '=', 'countries.id')
                ->first([
                    'sellers.*',
                    'addresses.address',
                    'addresses.city_id',
                    'addresses.country_id',
                    'addresses.latitude',
                    'addresses.longitude',
                    'states.name AS state', 'countries.name AS country', 'cities.name AS city',
                    'addresses.id AS addr_id',
                    'currencies.code AS currency',
                ]);

            $deliveryRequest['delivery_company_name'] = $delivery_company->shop_name;
            $deliveryRequest['delivery_company_address'] = $delivery_company['address'];
            $deliveryRequest['delivery_company_state'] = $delivery_company['state'];
            $deliveryRequest['delivery_company_country'] = $delivery_company['country'];
            $deliveryRequest['delivery_company_city'] = $delivery_company['city'];
            $deliveryRequest['currency'] = $delivery_company['currency'];
        }

        return response()->json(array(
            'status' => 200,
            'data' => $deliveryRequest,
            'message' => 'OK'
        ), 200);
    }

    public function rejectDeliveryCompanyShipment($invoice_id)
    {
        $user = auth()->user();
        $userId = $user->id;

        return response()->json(array(
            'data' => $this->updateDeliveryCompanyShipmentStatus($userId, $invoice_id, 'rejected'),
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function acceptDeliveryCompanyShipment($invoice_id)
    {
        $user = auth()->user();
        $userId = $user->id;

        return response()->json(array(
            'data' => $this->updateDeliveryCompanyShipmentStatus($userId, $invoice_id, 'accepted'),
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    public function finishDeliveryCompanyShipment($invoice_id)
    {
        $user = auth()->user();
        $userId = $user->id;

        return response()->json(array(
            'data' => $this->updateDeliveryCompanyShipmentStatus($userId, $invoice_id, 'deliverd'),
            'message' => 'OK',
            'status' => 200
        ), 200);
    }

    private function updateDeliveryCompanyShipmentStatus($userId, $invoice_id, $delivery_status)
    {
        if (!DeliveryCompany::where('user_id', $userId)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Delivery Company account was not discoverd.'
            ), 500);
        }

        $deliveryCompany = DeliveryCompany::where('user_id', $userId)->first();

        if (!DeliveryRequest::where('invoice_id', $invoice_id)->where('delivery_company_id', $deliveryCompany->id)->exists()) {
            return response()->json(array(
                'status' => 500,
                'message' => 'Delivery Request account was not discoverd.'
            ), 500);
        }

        $deliveryRequest = DeliveryRequest::where('invoice_id', $invoice_id)->first();

        if ($deliveryRequest->client_type === 'shop') {
            $ext_invoice_id = $deliveryRequest->ext_invoice_id;

            OrderItem::join('products', 'order_items.product_id', '=', 'products.id')->where('order_items.invoice_id', $ext_invoice_id)->where('products.seller_id', $deliveryRequest->sender_id)
                ->update(['delivery_status'  => $delivery_status]);

            if (sizeof(OrderItem::where('invoice_id', $ext_invoice_id)->get()) == sizeof(OrderItem::join('products', 'order_items.product_id', '=', 'products.id')->where('order_items.invoice_id', $ext_invoice_id)->where('products.seller_id', $deliveryRequest->sender_id)->get())) {
                Order::where('invoice_id', $ext_invoice_id)->where('user_id', $userId)
                    ->update(['delivery_status'  => $delivery_status]);
            } else {
                //check if other Order items status were 'awarded', 'on_route', 'deliverd' or 'confirmed', if true award the Order
                if (!OrderItem::join('products', 'order_items.product_id', '=', 'products.id')->where('order_items.invoice_id', $ext_invoice_id)->where('products.seller_id',  '!=', $deliveryRequest->sender_id)->where('delivery_status', 'pending')->exists()) {
                    Order::where('invoice_id', $ext_invoice_id)
                        ->update(['delivery_status'  => $delivery_status]);
                }
            }
        }

        $deliveryRequest = DeliveryRequest::where('invoice_id', $invoice_id)->where('delivery_company_id', $deliveryCompany->id)
            ->update([
                'delivery_status'  => $delivery_status,
            ]);

        return $deliveryRequest;
    }
}
