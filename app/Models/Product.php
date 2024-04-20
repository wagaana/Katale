<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $casts = [
        'attribute_sets' => 'array',
        'images' => 'array',
        'packaging_config' => 'array',
    ];

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }
}
