<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\PaymentMethodsController;

class CurrencyConverterCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'currency:converter';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to update exchange rates of currencies';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        PaymentMethodsController::updateCurrenciesExchangeRates();
        $this->info('Your command executed successfully!');
    }
}
