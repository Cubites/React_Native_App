package com.example.myorientation;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    String name;
    EditText editText;
    TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        showToast("onCreate 가 호출됨");

        editText = findViewById(R.id.editView);
        textView = findViewById(R.id.editView);

        Button button = findViewById(R.id.button);
        if(button != null) {
            button.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if (editText != null) {
                        name = editText.getText().toString();
                        showToast("입력한 값을 name변수에 할당했습니다.");
                    }
                }
            });
        }

        if(savedInstanceState != null) {
            if(textView != null) {
                name = savedInstanceState.getString("name");
                textView.setText(name);
                showToast("입력했던 값을 복원함." + name);
            }
        }
    }

    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        super.onSaveInstanceState(outState);
        outState.putString("name", name);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        showToast("onDestroy 가 호출됨");
    }

    public void showToast(String data) {
        Toast.makeText(this, data, Toast.LENGTH_SHORT).show();
    }
}