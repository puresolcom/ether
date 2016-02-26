<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Polyether\Entrust\Traits\EntrustUserTrait;
use Polyether\Meta\Models\UserMeta;

/**
 * App\User
 *
 */
class User extends Authenticatable
{

    use EntrustUserTrait;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'username', 'email', 'password', 'enabled',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function userMeta ()
    {
        return $this->hasMany(UserMeta::class, 'user_id', 'id');
    }

    public function getNameAttribute ()
    {
        return $this->first_name . ' ' . $this->last_name;
    }
}
