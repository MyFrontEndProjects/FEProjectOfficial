<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->string('file_path');
            $table->bigInteger('price');
            $table->integer('quantity')->default(0);
            $table->string('category')->default('gaming');
            $table->string('brand')->default('Gigabyte');
            $table->string('color')->default('Đen');
            $table->string('size')->default('15.6');
            $table->timestamps();
        });
        // Schema::create('orders', function (Blueprint $table) {
        //     $table->id();
        //     $table->bigInteger('total');
        //     $table->unsignedBigInteger('user_id');
        //     $table->foreign('user_id')->references('id')->on('users');
        //     $table->timestamps();
        // });
        // Schema::create('items', function (Blueprint $table) {
        //     $table->id();
        //     $table->integer('quantity');
        //     $table->BigInteger('price');
        //     $table->unsignedBigInteger('order_id');
        //     $table->foreign('order_id')->references('id')->on('orders');
        //     $table->unsignedBigInteger('product_id');
        //     $table->foreign('product_id')->references('id')->on('products');
        //     $table->timestamps();
        // });
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->integer('quantityPro');
            $table->BigInteger('price');
            $table->string('name');
            $table->string('file_path');
            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('id')->on('products');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
        // Schema::dropIfExists('orders');
        // Schema::dropIfExists('items');
        Schema::dropIfExists('carts');
    }
};
