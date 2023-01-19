const { exec } = require('child_process');

exec('ns --version', (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.log(`ns --version err: ${err}`);
        return;
    }

    const nsVersion = stdout.split('.')[0]

    // execute 'tns plugin build' for {N} version > 8. This command builds .aar in platforms/android folder.
    if (nsVersion >= 8) {
        console.log(`executing 'ns plugin build'`);
        exec('ns plugin build', (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                console.log(`${err}`);
                return;
            }
        });
    }
});
