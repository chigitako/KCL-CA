from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.egg import EggCountCreate, EggCount
from app.crud import egg as crud_egg # crud.egg をエイリアス `crud_egg` としてインポート
from app.db.supabase import get_supabase_client # db/supabase.pyからSupabaseクライアント取得関数をインポート

from supabase import Client # 型ヒントのためにインポート

router = APIRouter() # このファイル内のエンドポイントをまとめるルーターを作成

@router.post(
    "/egg_counts/", # このエンドポイントのURLパス
    response_model=EggCount, # 成功時のレスポンスの形
    status_code=status.HTTP_201_CREATED, # HTTPステータスコード 201 (Created) を返す
    summary="新しい卵のカウントデータを保存します" # APIドキュメントに表示される概要
)
# APIエンドポイントの関数定義
# egg_data: クライアントから送られてくるリクエストボディのデータ（Pydanticでバリデーションされる）
# supabase: get_supabase_client() 関数を通じてSupabaseクライアントが自動的に提供される
def create_egg_count(
    egg_data: EggCountCreate,
    supabase: Client = Depends(get_supabase_client)
):
    try:
        # crud_eggモジュールのcreate_egg_count_entry関数を呼び出してデータベースに保存
        new_entry = crud_egg.create_egg_count_entry(supabase, egg_data)
        return new_entry # 保存されたデータをレスポンスとして返す
    except Exception as e:
        # エラーが発生した場合はHTTP例外を発生させ、クライアントにエラーを通知
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, # 500 (Internal Server Error)
            detail=f"卵データの保存中にエラーが発生しました: {e}"
        )

@router.get(
    "/egg_counts/", # このエンドポイントのURLパス
    response_model=list[EggCount], # 成功時のレスポンスの形（EggCountのリスト）
    summary="すべての卵のカウントデータを取得します" # APIドキュメントに表示される概要
)
# 卵のカウントデータを取得するAPIエンドポイント関数
def read_egg_counts(
    skip: int = 0,
    limit: int = 100,
    supabase: Client = Depends(get_supabase_client)
):
    try:
        # crud_eggモジュールのget_egg_counts関数を呼び出してデータを取得
        egg_counts = crud_egg.get_egg_counts(supabase, skip=skip, limit=limit)
        return egg_counts # 取得したデータをレスポンスとして返す
    except Exception as e:
        # エラーが発生した場合はHTTP例外を発生
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"卵データの取得中にエラーが発生しました: {e}"
        )