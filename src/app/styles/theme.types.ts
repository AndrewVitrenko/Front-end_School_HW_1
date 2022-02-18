interface ThemeColors {
  white: '#ffffff';
  black: '#000000';
  text: '#444444' | '#f4f4f4';
  background: '#fafafa' | '#303030',
  cardBackground: '#ffffff' | '#424242',
  cardText: '#000000de' | '#ffffff',
  pagination: '#212121' | '#ffffff',
  paginationBackground: 'rgba(255, 255, 255, 0.16)' | 'rgba(0, 0, 0, 0.08)'
}

export interface Theme {
  light: ThemeColors;
  dark: ThemeColors;
}
