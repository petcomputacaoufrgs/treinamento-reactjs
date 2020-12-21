class SleepUtils {
    sleep = async (ms: number): Promise<void> => {
        return new Promise<void>(resolve => setTimeout(resolve, ms))
    }
}

export default new SleepUtils()