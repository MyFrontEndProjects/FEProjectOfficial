<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $table = 'carts';
    protected $fillable = [
        'product_id', 'quantityPro', 'price','name', 'file_path', 'user_id'
    ];

    protected $with = ['product'];
    public function product()
    {
        return $this->belongsTo(Product::class,'product_id', 'id' );
    }
    public function getProduct()
    {
        return $this->product;
    }
    public function setProduct($product)
    {
        $this->product = $product;
    }
}
