import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from "./components/ErrorFallback";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <section>
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </section>
  );
}

export default App;
