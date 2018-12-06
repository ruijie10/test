package com.example.liruijie.myapplication

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.content.Intent
import android.widget.EditText


class MainActivity : AppCompatActivity() {

    companion object {
        val EXTRA_MESSAGE = "com.example.liruijie.myapplication"
    }


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun sendMessage(view: View)//按钮按下事件的内容
    {
        val intent = Intent(this, HomeActivity::class.java)
        val editText = findViewById<View>(R.id.editText2) as EditText
        val message = editText.text.toString()
        intent.putExtra(EXTRA_MESSAGE, message)
        startActivity(intent)
    }


}
