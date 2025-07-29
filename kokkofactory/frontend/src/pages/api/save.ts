const handleSaveDeadChickens = async () => {
  const coopId = 1; // 鶏舎ID（例）
  const count = 3; // 死んだ鶏の数（例）

  try {
    const response = await fetch("/api/dead-chickens", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ coopId, count }),
    });
    const data = await response.json();

    if (response.ok) {
      alert(`データが保存されました: ${data.message}`);
    } else {
      alert(`保存に失敗しました: ${data.message}`);
    }
  } catch (error) {
    alert("エラーが発生しました");
  }
};
