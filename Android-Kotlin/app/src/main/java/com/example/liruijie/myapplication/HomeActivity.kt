package com.example.liruijie.myapplication

import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.widget.TextView
import android.widget.Button


class HomeActivity  : AppCompatActivity() {
//    companion object {
//        val fuck = "MainActivity"
//    }

    private lateinit var button3 : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)

        button3 = findViewById(R.id.button3)

        // Get the Intent that started this activity and extract the string
        val intent = intent
        val message = intent.getStringExtra(MainActivity.EXTRA_MESSAGE)

        val textView = findViewById<TextView>(R.id.textView)
        textView.text = message
        button3.setOnClickListener{startActivity(Intent(this@HomeActivity, ThreeActivity::class.java))}
    }

//    override fun onStart() {
//        super.onStart()
//        Log.d(fuck,"start")
//    }
//
//    override fun onResume() {
//        super.onResume()
//        Log.d(fuck,"onResume")
//    }
//
//    override fun onPause() {
//        super.onPause()
//        Log.d(fuck,"onPause")
//    }
//
//    override fun onStop() {
//        super.onStop()
//        Log.d(fuck,"onStop")
//    }
//
//    override fun onDestroy() {
//        super.onDestroy()
//        Log.d(fuck,"onDestroy")
//    }

}