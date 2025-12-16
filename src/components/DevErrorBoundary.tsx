import React from 'react';

interface State {
  hasError: boolean;
  error?: Error | null;
}

export default class DevErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    // Log to console so Vite / browser console shows a stacktrace
    console.error('DevErrorBoundary caught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h2 style={{ color: '#b91c1c' }}>Uygulama Ã§alÄ±ÅŸtÄ±rÄ±lamadÄ±</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#111' }}>{String(this.state.error)}</pre>
          <p>Detaylar tarayÄ±cÄ± konsolunda (F12 â†’ Console) gÃ¶rÃ¼necek.</p>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}
