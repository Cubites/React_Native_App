package com.example.myevent;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.GestureDetector;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    TextView textView; // textView 를 TextView 타입으로 지정
    View view;
    GestureDetector detector;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        textView = findViewById(R.id.textView);

        view = findViewById(R.id.view);
        view.setOnTouchListener(new View.OnTouchListener(){
           @Override
           public boolean onTouch(View v, MotionEvent event){
               int action = event.getAction();

               float curX = event.getX();
               float curY = event.getY();

               if(action == MotionEvent.ACTION_DOWN){
                   println("손가락 눌림 - X축 : " + curX + ", Y축 : " + curY);
               }else if(action == MotionEvent.ACTION_MOVE) {
                   println("손가락 움직임 - X축 : " + curX + ", Y축 : " + curY);
               }else if(action == MotionEvent.ACTION_UP){
                   println("손가락 벗어남 - X축 : " + curX + ", Y축 : " + curY);
               }
               return true; // 앞에서 함수 정의 시, return 을 boolean 으로 지정했으므로 return이 없으면 에러 발생
           }
        });

        // 아래 this 앞에 표시되는 텍스트는 android studio 의 힌트(타이핑하는게 아님)
        detector = new GestureDetector(this, new GestureDetector.OnGestureListener() {
            @Override
            public boolean onDown(MotionEvent e) {
                println("손가락이 눌려 onDown 이 호출 됨");
                return true;
            }

            @Override
            public void onShowPress(MotionEvent e) {

            }

            @Override
            public boolean onSingleTapUp(MotionEvent e) {
                return false;
            }

            @Override
            public boolean onScroll(MotionEvent e1, MotionEvent e2, float distanceX, float distanceY) {
                return false;
            }

            @Override
            public void onLongPress(MotionEvent e) {
                println("길게 누르고 있어 onLongPress 가 호출 됨");
            }

            @Override
            public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX, float velocityY) {
                println("onFling 호출 : " + velocityX + ", " + velocityY);
                return true;
            }
        });

        View view2 = findViewById(R.id.view2);
        view2.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                detector.onTouchEvent(event);
                return true;
            }
        });
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if(keyCode == KeyEvent.KEYCODE_BACK){
            println("시스템 [BACK] 버튼이 눌렸어요.");
            return true;
        }
        return false;
    }

    public void println(String data){
        textView.append(data + "\n");
    }
}