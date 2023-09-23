import path from 'path';

export function get_file_path_from_src(rPath: string): string {
    return path.join(__dirname, '../' + rPath);
};
