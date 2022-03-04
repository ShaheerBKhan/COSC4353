

export const DatabaseConnection = async () => {
    const connectionString = "postgres://ggjlsemm:TUnmgbVkNWWHNuSRtZbtvQd-WM4c_sFt@kashin.db.elephantsql.com/ggjlsemm";
    const client = new pg.Client(connectionString);
    await client.connect();

    return client;
}