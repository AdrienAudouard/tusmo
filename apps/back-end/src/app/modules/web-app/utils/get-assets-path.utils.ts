import * as path from 'path';
import { environment } from '../../../../environments/environment';

export function getAssetPath(url: string) {
  const basePath = environment.webAppBuildFolder;
  return path.resolve(path.join(basePath, url));
}
