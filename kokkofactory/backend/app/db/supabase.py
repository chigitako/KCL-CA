#supabase clientの初期化
import os
from supabase import create_Client,Client
from dotenv import load_dotenv

load.dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")


if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("SUPABASE_URL and SUPABASE_KEY environment variables must be set.")

# アプリケーション起動時に一度だけクライアントを作成し、再利用します。
_supabase_client: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# 自動的にこのクライアントインスタンスが提供されます。
def get_supabase_client() -> Client:
    return _supabase_client