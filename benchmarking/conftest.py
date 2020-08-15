import os


def pytest_benchmark_update_machine_info(config, machine_info):
    machine_info["cpu_count"] = os.cpu_count()
