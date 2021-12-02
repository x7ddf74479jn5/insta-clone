import NextImage from "next/image";

export const mockNextImage = () => {
  return Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: (props: any) => {
      const { width, height } = props;
      if (width === undefined || height === undefined) return <img {...props} />;
      const _width = typeof width === "string" ? parseInt(width) : width;
      const _height = typeof height === "string" ? parseInt(height) : height;
      const ratio = (_height / _width) * 100;
      return (
        <div
          style={{
            paddingBottom: `${ratio}%`,
            position: "relative",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              position: "absolute",
              minWidth: "100%",
              minHeight: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            {...props}
          />
        </div>
      );
    },
  });
};
