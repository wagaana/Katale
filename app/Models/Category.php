<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function products()
    {
        return $this->hasMany(Product::class)
            ->orWhereHas('category', function ($query) {
                $query->where('parent_id', $this->id);
            })
            ->with(['category', 'category.parent', 'category.children', 'seller.user'])
            ->join('sellers', 'products.seller_id', '=', 'sellers.id')
            ->join('users', 'sellers.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->orderBy('products.id', 'desc');
    }

    public function productsWithDetails()
    {
        return $this->hasMany(Product::class)
            ->orWhereHas('category', function ($query) {
                $query->where('parent_id', $this->id);
            })
            ->with(['category', 'category.parent', 'category.children', 'seller.user'])
            ->join('sellers', 'products.seller_id', '=', 'sellers.id')
            ->join('users', 'sellers.user_id', '=', 'users.id')
            ->join('currencies', 'users.country', '=', 'currencies.country_code')
            ->orderBy('products.id', 'desc')
            ->get([
                'products.*',
                'sellers.id as seller_id',
                'users.user_name',
                'currencies.code AS currency'
            ]);
    }
}
