export default function handler(req, res) {
  const items = req.body.items || [];

  const sortedItems = items
    .filter(item => item.isVideo === true)
    .sort((a, b) => (b.video_views || 0) - (a.video_views || 0));

  const top5 = sortedItems.slice(0, 5);

  res.status(200).json({ top5 });
}
