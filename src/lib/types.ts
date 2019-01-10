export type CLIOptions = {
    _: string[];
    ignorePatterns: string[];
    flags: string;
    debug: boolean;
};

export type Issue = {
    message: string;
    path: string;
};

export type Position = {
    line: number;
    column: number;
};

export interface ILink {
    link: string;
    isValid: boolean;
    position: Position;
}

export interface IMDFile {
    absoluteLinks: Set<ILink>;
    internalLinks: Set<ILink>;
    invalidLinks: Set<ILink>;
    links: Set<ILink>;
    path: string;
    relativeLinks: Set<ILink>;
    relativePath: string;
    titles: Set<string>;
    validateLinks: () => Promise<void>;
}