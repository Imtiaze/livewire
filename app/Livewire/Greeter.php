<?php

namespace App\Livewire;

use Livewire\Component;

class Greeter extends Component
{
    public $name = "John";

    public function changeName($name)
    {
        $this->name = $name;
    }

    public function render()
    {
        return view('livewire.greeter');
    }
}
