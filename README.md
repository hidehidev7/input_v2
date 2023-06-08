# input_v2.js

KakiyamaInputクラス

-start(canvas?, element?) インプットを開始します。 canvasには使用するcanvasを任意で指定してください。elementにはインプットを開始する要素を任意で指定してください。デフォルトだとどちらもdocumentです。

-getPressedKey() 現在押されているキーのcodeが入った配列を返します。

-getKey(code) 引数のキーコードのキーが押されているかbooleanで返します。

-getKeyDown(code) 引数のキーコードが押されたかBooleanで返します。キーが押されて1回目はtrueを、2回目以降はfalseを返します。

-getMouseValue() マウスがプレスされた状態であるかbooleanで返します。

-getLastMousePosition() 最後にCanvasの上で動いた時のマウスの座標(変換済み)を返します。



getPositionOnCanvas(e)  canvasのマウスイベントまたはタッチイベント時に与えられるイベントハンドラーを引数に指定してください。マウスの座標を、canvas内の座標(拡大処理済み)として返します。
