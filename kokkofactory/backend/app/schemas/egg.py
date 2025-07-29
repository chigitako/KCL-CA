#データベースに合わせてpydanticを定義する（バリデーションチェックのため）
from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

#卵のデータを送るための基本スキーマ
class EggCountBase(BaseModel):
    coop_id: int
    count: int
    average_weight: Optional[float]=None #デフォルトがNone

#入力時に必要なスキーマ（今回はEggCountBassの内容で十分）
class EggCountCreate(EggCountBase):
    pass

#自動生成するもの
class EggCount(EggCountBase):
    egg_id: int
    recorded_at: datetime

    class Config:
        from_attributes=True
    

