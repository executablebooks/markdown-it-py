def pytest_benchmark_update_machine_info(config, machine_info):
    import psutil

    freq = psutil.cpu_freq()
    machine_info["psutil"] = {
        "cpu_count": psutil.cpu_count(logical=False),
        "cpu_count_logical": psutil.cpu_count(logical=True),
        "cpu_percent": psutil.cpu_percent(),
        "cpu_freq_min": freq.min,
        "cpu_freq_max": freq.max,
        "cpu_freq_current": freq.current,
    }
