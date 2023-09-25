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
        Schema::table('sanphams', function (Blueprint $table) {
            $table->renameColumn('tensp', 'name');
            $table->renameColumn('hinhanh', 'image');
            $table->renameColumn('gia', 'price');
            $table->renameColumn('loai', 'description');
            $table->renameColumn('soluong', 'quantity');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sanphams');
        //
    }
};
