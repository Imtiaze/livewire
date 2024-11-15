<?php

namespace App\Livewire;

use Livewire\Component;

class Greeter extends Component
{
    private $talk = "The Master doesn't talk, he acts.";

    public function render()
    {
        return view('livewire.greeter', ['talk' => $this->talk]);
    }
}
