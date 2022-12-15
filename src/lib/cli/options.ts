/**
 * @fileoverview Options configuration for optionator.
 */

/*
 * ------------------------------------------------------------------------------
 * Requirements
 * ------------------------------------------------------------------------------
 */

import optionator = require('optionator'); // `require` used because `optionator` exports a function

/*
 * ------------------------------------------------------------------------------
 * Initialization and Public Interface
 * ------------------------------------------------------------------------------
 */

export const options = optionator({
    defaults: {
        concatRepeatedArrays: true,
        mergeRepeatedObjects: true
    },
    options: [
        { heading: 'Basic configuration' },
        {
            alias: 'i',
            concatRepeatedArrays: [true, { oneValuePerFlag: true }],
            default: '[]',
            description: 'Regex to ignore links',
            option: 'ignorePatterns',
            type: 'path::[String]'
        },
        {
            alias: 'f',
            dependsOn: 'ignorePatterns',
            description: 'Flags applied to the ignore pattern',
            option: 'flags',
            type: 'path::String'
        },
        {
            alias: 'h',
            description: 'Show help',
            option: 'help',
            type: 'Boolean'
        },
        { heading: 'Log configuration' },
        {
            alias: 'oi',
            concatRepeatedArrays: [true, { oneValuePerFlag: true }],
            default: '[]',
            description: 'file name for logging of file with invalid links',
            option: 'ignorePatterns',
            type: 'path::[String]'
        },
        { heading: 'Miscellaneous' },
        {
            default: false,
            description: 'Output debugging information',
            option: 'debug',
            type: 'Boolean'
        }
    ],
    prepend: 'markdown-link-validator ./path/to/mds [options]'
});
