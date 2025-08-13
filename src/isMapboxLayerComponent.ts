export function isMapboxLayerComponent(type: any) {
  // You can expand this list with other RNMBX layer components
  const layerNames = [
    'SymbolLayer',
    'CircleLayer',
    'FillLayer',
    'LineLayer',
    'HeatmapLayer',
    'RasterLayer',
    'FillExtrusionLayer',
    'SkyLayer',
    'BackgroundLayer',
    'HillshadeLayer'
  ];
  return (
    typeof type === 'function' &&
    (layerNames.includes(type.displayName) || layerNames.includes(type.name))
  );
}