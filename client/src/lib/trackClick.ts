export async function trackClick(buttonName: string): Promise<void> {
  try {
    await fetch('/api/track-click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ buttonName }),
    });
  } catch (error) {
    console.error('Failed to track click:', error);
  }
}
