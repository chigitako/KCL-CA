from supabase import Client
from app.schemas.egg import EggCountCreate, EggCount

#データベースに値を挿入する関数
def create_egg_count_entry(supabase:Client, egg_data:EggCountCreate)->EggCount:
    try:
        data_to_insert=egg_data.model_dump() #pydanticから辞書形式に
        #Supabaseのテーブルにデータを挿入し、実行
        response=supabase.table("egg_counts").insert(data_to_insert).execute()
        #挿入が成功し、データが返された場合、そのデータをPydanticモデルに変換して返す
        if response.data:
            return EggCount(**response.data[0])
        else:
            raise Exception("supabaseからデータが返されませんでした")
    except Exception as e:
        print(f"Error inserting egg count: {e}")
        raise

def get_egg_counts(supabase: Client,skip: int=0,limit: int=100)->list[EggCount]:
    #supabaseからデータを取得
    try:
        response=supabase.table("egg_counts").select("*").order("recorded_at",desc=True).range(skip,skip+limit-1).execute()
        return [EggCount(**item) for item in response.data]
    except Exception as e:
        print(f"Error fetching egg counts: {e}")
        raise