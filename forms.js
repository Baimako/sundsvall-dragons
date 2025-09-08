import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fzbhrdfnmarltjlammbw.supabase.co/';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function getVal(){
    fname = document.querySelector("#fname").value;
    lname = document.querySelector("#lname").value;
    callSign = document.querySelector("#callsign").value;

    const { data, error } = supabase  .from('team-members')  .insert([    { first_name: fname, last_name: lname, call_sign: callSign }  ])

    console.log(fname, lname, callSign);
}